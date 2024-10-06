import { useState } from "react"
import PostCommentForm from "../Comment/PostCommentForm"
import "./PostContents.css"

const PostContents = ({ imageUrl, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(true);
    }

    return (
        <>
            {isOpen ? <PostCommentForm edit={false} setIsOpen={setIsOpen}/> : ""}
            <div className="post-contents">

                <img src={imageUrl} alt="포스트이미지" />
                <div>
                    <pre>{`${content}`}</pre>
                </div>
                <button onClick={handleClick}>댓글 달기</button>
            </div>
        </>
    )
}

export default PostContents