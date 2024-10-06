import "./GroupCardList.css"
import GroupCard from "./GroupCard"
import { UsePublicContext } from "../../context/publicContext";
import { GroupListData, MemoryListData } from "../../api/GroupApi"
import { useEffect, useState } from "react";
import NoGroup from "../../assets/NoGroup";
import NoMemory from "../../assets/NoMemory";
import MakeGroupBTN from "../../assets/MakeGroupBTN";
import MakeMemoryBTN from "../../assets/MakeMemoryBTN";
import { useLocation, useNavigate } from "react-router-dom";
import DDayCal from "../../assets/DDayCal";
import MemoryCard from "./MemoryCard";

const GroupCardList = ({ isHome }) => {
    const navigate = useNavigate();
    const path = useLocation().pathname
    const SHOWING_GROUP = 4;
    const groupId = path.slice(7);

    const { toggleShowContents, keyword, order } = UsePublicContext();
    const [showMoreFlag, setShowMoreFlag] = useState(true);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [groupList, setGroupList] = useState([]);
    const [showingGroup, setShowingGroup] = useState(SHOWING_GROUP);
    const [totalGroup, setTotalGroup] = useState(0);
    const [noGroupDataFlag, setNoGroupDataFlag] = useState(true);
    const [sortOption, setSortOption] = useState("latest");

    const handleButtonClick = () => {
        navigate('/register'); // 새로운 경로로 이동
    };

    const handleButtonUpload = () => {
        navigate('upload'); // 새로운 경로로 이동
    };

    const handleMore = () => {
        setShowingGroup(showingGroup + SHOWING_GROUP)
    }

    // 그룹 리스트가 없을경우 처리
    useEffect(() => {
        groupList.length === 0 ? setNoGroupDataFlag(0) : setNoGroupDataFlag(1);
    }, [groupList])

    //order에 따라 sortOption을 바꿈
    useEffect(() => {
        if (order == "공감순") {
            setSortOption("mostLiked");
        }
        else if (order == "최신순") {
            setSortOption("latest");
        }
        else if (order == "추억순") {
            setSortOption("mostPosted");
        }
        else if (order == "획득배지순") {
            setSortOption("mostBadge");
        }
        else if (order == "댓글순") {
            setSortOption("mostCommented");
        }
    }, [order]);

    //키워드나 공개, 비공개 전환, 순서 변경시 api 요청.
    useEffect(() => {
        if (isHome) {
            const params = {
                page: 1, // 예시: 페이지 번호
                pageSize: showingGroup, // 예시: 항목 수 제한
                keyword: keyword, // 예시: 검색 키워드
                isPublic: toggleShowContents,
                sortBy: sortOption
            };
            setLoading(true);

            const getData = async () => {
                try {
                    const result = await GroupListData(params);
                    setGroupList(result.data);
                    setTotalGroup(result.totalItemCount);
                } catch (err) {
                    setError(err.message);
                } finally {
                    setLoading(false);
                }
            };

            getData();
        }
        //게시글 확인할 때
        else {
            const params = {
                page: 1, // 예시: 페이지 번호
                pageSize: showingGroup, // 예시: 항목 수 제한
                keyword: keyword, // 예시: 검색 키워드
                isPublic: toggleShowContents,
                sortBy: sortOption,
                groupId: groupId
            };

            setLoading(true);

            const getData = async () => {
                try {
                    const result = await MemoryListData({ params, groupId })
                    setGroupList(result.data);
                    setTotalGroup(result.totalItemCount);
                } catch (err) {
                    setError(err.message);
                } finally {
                    setLoading(false);
                }
            };

            getData();
        }
    }, [keyword, toggleShowContents, sortOption]);

    //더보기를 눌렀을 경우 재요청
    useEffect(() => {
        if (isHome) {
            const params = {
                page: 1, // 예시: 페이지 번호
                pageSize: showingGroup, // 예시: 항목 수 제한
                keyword: keyword, // 예시: 검색 키워드
                isPublic: toggleShowContents,
                sortBy: sortOption
            };

            const getData = async () => {
                try {
                    const result = await GroupListData(params);
                    setGroupList(result.data);
                    setTotalGroup(result.totalItemCount);
                } catch (err) {
                    setError(err.message);
                } finally {
                    setLoading(false);
                }
            };

            getData();
        }
        //게시글 확인할 때
        else {
            const params = {
                page: 1, // 예시: 페이지 번호
                pageSize: showingGroup, // 예시: 항목 수 제한
                keyword: keyword, // 예시: 검색 키워드
                isPublic: toggleShowContents,
                sortBy: sortOption,
                groupId: groupId
            };

            const getData = async () => {
                try {
                    const result = await MemoryListData({ params, groupId })
                    setGroupList(result.data);
                    setTotalGroup(result.totalItemCount);
                } catch (err) {
                    setError(err.message);
                } finally {
                    setLoading(false);
                }
            };

            getData();
        }
    }, [showingGroup]);

    //더보기 버튼 보일지 말지
    useEffect(() => {
        if (showingGroup >= totalGroup) {
            setShowMoreFlag(false)
        }
        else {
            setShowMoreFlag(true)
        }
    }, [showingGroup, totalGroup]);

    //보여지는 그룹의 수는 비공개, 공개전환마다 초기화한다.
    useEffect(() => {
        setShowingGroup(SHOWING_GROUP);
    }, [toggleShowContents]);

    // 보여지는 부분
    if (loading) return <div className="loading"></div>;
    if (error) return <div className="error"><p>Error: {error}</p></div>;

    return (
        <div className="wholeGroupCardContainer">
            {isHome ?
                // 그룹들을 보여주는 경우
                <>
                    {noGroupDataFlag ?
                        <div className="upperGroupCardContainer">
                            <div className="groupCardContainer">{(
                                groupList.map((post) => (
                                    <GroupCard
                                        isHome={isHome}
                                        key={post.id}
                                        id={post.id}
                                        name={post.name}
                                        imageUrl={post.imageUrl}
                                        isPublic={post.isPublic}
                                        likeCount={post.likeCount}
                                        dDay={DDayCal(post.createdAt)}
                                        badgeCount={post.badgeCount}
                                        postCount={post.postCount}
                                        introduction={post.introduction}
                                    />
                                ))
                            )}

                            </div>
                            {showMoreFlag ? <button onClick={handleMore} className="moreBtn">더보기</button> : ""}
                        </div>
                        : (
                            <div className="noGroup">
                                <NoGroup />
                                <div className="noMakeGroupBTN" onClick={handleButtonClick}>
                                    <MakeGroupBTN />
                                </div >
                            </div >
                        )}
                </>
                :
                // 추억들을 보여주는 경우
                <>
                    {noGroupDataFlag ?
                        <div className="upperGroupCardContainer">
                            <div className="groupCardContainer">{(
                                groupList.map((post) => (
                                    <MemoryCard
                                        key={post.id}
                                        id={post.id}
                                        nickname={post.nickname}
                                        title={post.title}
                                        imageUrl={post.imageUrl}
                                        tags={post.tags}
                                        location={post.location}
                                        moment={post.moment}
                                        isPublic={post.isPublic}
                                        likeCount={post.likeCount}
                                        dDay={DDayCal(post.createdAt)}
                                        commentCount={post.commentCount}
                                    />
                                ))
                            )}
                            </div>
                            {showMoreFlag ? <button onClick={handleMore} className="moreBtn">더보기</button> : ""}
                        </div>
                        : (
                            <div className="noGroup">
                                <NoMemory />
                                <div className="noMakeGroupBTN" onClick={handleButtonUpload}>
                                    <MakeMemoryBTN />
                                </div >
                            </div >
                        )}
                </>
            }
        </div>

    );
};

export default GroupCardList;
