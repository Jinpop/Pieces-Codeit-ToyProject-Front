import React, { useEffect, useState } from 'react';
import './DetailGroupCard.css';  // CSS 파일 가져오기
import { BadgeSevenDay, BadgeLikeGroup, BadgeLikePost, BadgeCreateGroup, BadgeMemory, NoBadge } from '../assets/Badges';
import LikeBtn from '../assets/LikeBtn';
import { GroupLike } from '../api/GroupApi';
import ModalDeleteGroup from './ModalDeleteGroup'
import ModalEditGroup from './Group/ModalEditGroup';

const DetailGroupCard = ({ id, badges, dDay, imageUrl, introduction, isPublic, likeCount, name, postCount }) => {
    const ISBADGE = ['7일 연속 추억 등록', '추억 수 20개 이상 등록', '그룹 생성 후 1년 달성', '그룹 공감 1만 개 이상 받기', '추억 공감 1만 개 이상 받기'];
    const [groupLike, setGroupLike] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const handleLike = async () => {
        if (!groupLike) {
            try {
                await GroupLike(id);
                setGroupLike(true)
            } catch (err) {
                alert(err);
            }
        }
        else {
            alert("이미 공감하셨습니다.")
        }
    }

    const handleDelete = () => {
        setIsModalOpen(true);
    }

    const handleEdit = () => {
        setIsEditModalOpen(true);
    }


    return (
        <div className="detailGroupCardContainer">
            {isModalOpen ? <ModalDeleteGroup setIsModalOpen={setIsModalOpen} /> : ""}
            {isEditModalOpen ? <ModalEditGroup setIsEditModalOpen={setIsEditModalOpen} /> : ""}
            <div className="detailGroupInfo">
                <img
                    className="detailGroupImage"
                    src={imageUrl}
                    alt="그룹 대표 이미지"
                />
                <div className="detailGroupDetails">
                    <div className="detailGroupHeader">
                        <div>D+{dDay} &nbsp;<span>| &nbsp;{isPublic ? "공개" : "비공개"}</span></div>
                        <div className='editDetailGroupDiv'><a onClick={handleEdit}>그룹정보 수정하기</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span onClick={handleDelete}>그룹 삭제하기</span></div>
                    </div>
                    <div className="detailGroupMeta">
                        <h2>{name}</h2>
                        <span>추억 {postCount} &nbsp;&nbsp;|&nbsp;&nbsp; 그룹 공감 {likeCount + groupLike}</span>
                    </div>

                    <div className="detailGroupIntro">
                        {introduction}
                    </div>
                    <div className="badgeSection">
                        <p>획득</p>
                        <div className='badgeUpperDiv'>
                            <div className="badges">
                                {badges.includes(ISBADGE[0]) ? <BadgeSevenDay /> : ""}
                                {badges.includes(ISBADGE[1]) ? <BadgeMemory /> : ""}
                                {badges.includes(ISBADGE[2]) ? <BadgeCreateGroup /> : ""}
                                {badges.includes(ISBADGE[3]) ? <BadgeLikeGroup /> : ""}
                                {badges.includes(ISBADGE[4]) ? <BadgeLikePost /> : ""}
                                {badges.length === 0 ? <NoBadge /> : ""}
                            </div>
                            <div onClick={handleLike} className='LikeBtn'>
                                <LikeBtn />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailGroupCard;
