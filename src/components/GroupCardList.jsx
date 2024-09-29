import "./GroupCardList.css"
import GroupCard from "./GroupCard"
import { UsePublicContext } from "../context/publicContext";
import GroupListData from "../api/GroupApi"
import { useEffect, useState } from "react";

const GroupCardList = () => {
    const { toggleShowContents, keyword } = UsePublicContext();

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filteredGroupList, setFilteredGroupList] = useState([]);
    const [groupList, setGroupList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const params = {
            page: 1, // 예시: 페이지 번호
            pageSize: 10, // 예시: 항목 수 제한
            keyword: keyword // 예시: 검색 키워드
        };
        console.log(keyword);
        setLoading(true);
        const getData = async () => {
            try {
                const result = await GroupListData(params);
                setData(result);
                setGroupList(result.data)
                setTotalPages(result.totalPages);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, [keyword]);

    useEffect(() => {
        setFilteredGroupList(groupList.filter(post => post.isPublic === toggleShowContents));
    }, [groupList, toggleShowContents]);


    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="groupCardContainer">
            {filteredGroupList.map((post) => (
                <GroupCard
                    key={post.id}
                    name={post.name}
                    imageUrl={post.imageUrl}
                    isPublic={post.isPublic}
                    likeCount={post.likeCount}
                    createdAt={post.createdAt}
                    badgeCount={post.badgeCount}
                    postCount={post.postCount}
                    introduction={post.introduction}
                />
            ))}
        </div>
    );
};

export default GroupCardList;
