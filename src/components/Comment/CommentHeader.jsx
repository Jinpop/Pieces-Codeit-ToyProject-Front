import CommentCard from "./CommentCard";
import "./CommentHeader.css"

const CommentHeader = ({id, commentCount, comments }) => {
    console.log(comments)

    return (
        <div className="comment">
            <p className="comment-border">댓글 {commentCount}</p>
            {comments.map((post, index) => (
                <CommentCard key={index} id={post.id} content={post.content} moment={post.createdAt.slice(0, 10) + " " + post.createdAt.slice(11,16)} nickname={post.nickname} />
            ))}
        </div>
    )
}

export default CommentHeader;