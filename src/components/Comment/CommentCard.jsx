import "./CommentCard.css"

import { useState } from "react";
import DeleteCommentIcon from "../../assets/icon/DeleteComentIcon";
import EditIcon from "../../assets/icon/EditIcon";
import ModalDeleteComment from "./ModalDeleteComment";
import PostCommentForm from "./PostCommentForm";

const CommentCard = ({id, content, moment, nickname }) => {
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    console.log(id);

    const handleEdit = () => {
        setIsOpen(true);
    }

    const handleDelete = () => {
        setIsDeleteOpen(true);
    }

    return (
        <>
            {isDeleteOpen ? <ModalDeleteComment id={id} setIsDeleteOpen={setIsDeleteOpen}/> : ""}
            {isOpen ? <PostCommentForm commentid={id} edit={true} setIsOpen={setIsOpen}/> : ""}
            <div className="comment-card">
                <p>{nickname}&nbsp;&nbsp;<span>{moment}</span></p>
                <div className="comment-card-contents">
                    <p>{content}</p>
                    <div>
                        <span onClick={handleEdit}><EditIcon /></span>
                        <span onClick={handleDelete}><DeleteCommentIcon /></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommentCard;