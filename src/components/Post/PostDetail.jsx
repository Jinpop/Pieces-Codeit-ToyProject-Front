import "./PostDetail.css"

import FaviS from "../../assets/icon/FaviS";
import CommentIcon from "../../assets/icon/CommentIcon"
import LikeBtn from "../../assets/LikeBtn"
import { useParams } from "react-router-dom";
import { useState } from "react";
import { LikePost } from "../../api/PostApi";
import ModalDeletePost from "./ModalDeletePost";

const PostDetail = ({ title, nickname, tags, location, moment, isPublic, likeCount, commentCount }) => {
    const { postid } = useParams();
    const [postLike, setPostLike] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);

    const handleClick = async () => {
        if (!postLike) {
            try {
                await LikePost(postid);
                setPostLike(true)
            } catch (err) {
                alert(err);
            }
        }
        else {
            alert("이미 공감하셨습니다.")
        }
    }

    const handleEdit = () => {

    }

    const handleDelete = () => {
        setIsDeleteOpen(true);
    }

    return (
        <>
            {isDeleteOpen ? <ModalDeletePost setIsDeleteOpen={setIsDeleteOpen}/> : ""}
            <div className="post-detail-container">
                <div className="post-detail-header">
                    <p>{nickname} &nbsp;&nbsp;&nbsp;<span>| &nbsp;&nbsp;&nbsp;{isPublic ? "공개" : "비공개"}</span></p>
                    <p onClick={handleEdit} className="post-detail-header-edit">추억 수정하기 &nbsp;&nbsp;&nbsp;<span onClick={handleDelete}>|&nbsp;&nbsp;&nbsp; 추억 삭제하기</span></p>
                </div>
                <h2 className="post-detail-title">{title}</h2>

                <div className="post-detail-tags">
                    {tags.map((tags, index) => (
                        <p key={index}>#{tags}&nbsp;</p>
                    ))}
                </div>

                <div className="post-detail-info">

                    <div className="post-detail-stats">
                        <p>{location}</p>
                        <p>{moment.slice(0, 10) + " " + moment.slice(11, 16)}</p>
                        <span className="post-detail-likes"><FaviS />&nbsp;&nbsp;{likeCount + postLike}</span>
                        <span className="post-detail-comments"><CommentIcon />&nbsp;&nbsp;{commentCount}</span>
                    </div>

                    <div onClick={handleClick} className="like-button">
                        <LikeBtn />
                    </div>
                </div>
            </div>
        </>
    );
};

export default PostDetail;