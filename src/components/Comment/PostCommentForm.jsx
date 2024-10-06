import { useEffect, useState } from "react";
import "./PostCommentForm.css"
import { useParams } from "react-router-dom";
import { PostComment } from "../../api/PostApi";
import CloseBtn from "../../assets/CloseBtn";
import { EditComment } from "../../api/CommentApi";


const PostCommentForm = ({ edit, setIsOpen, commentid }) => {
    const { postid } = useParams();

    const [nickname, setNickname] = useState("");
    const [content, setContent] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);


    useEffect(() => {
        const isFormFilled = content !== '' && password !== '' && nickname !== '';
        setIsFormValid(isFormFilled);
    }, [content, password, nickname]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        if (isFormValid) {
            if (edit) {
                try {
                    const data =
                    {
                        "nickname": nickname,
                        "content": content,
                        "password": password,
                    }
                    await EditComment(commentid, data);
                    alert("성공적으로 댓글이 수정되었습니다.");
                    window.location.reload();
                } catch (error) {
                    alert("그룹 비밀번호를 확인해주세요")
                }
                finally {
                    setLoading(false);
                }
            }
            else {
                try {
                    const data =
                    {
                        "nickname": nickname,
                        "content": content,
                        "password": password,
                    }

                    await PostComment(postid, data);
                    alert("성공적으로 댓글이 등록되었습니다.");
                    window.location.reload();

                } catch (error) {
                    alert("그룹 비밀번호를 확인해주세요")
                }
                finally {
                    setLoading(false);
                }
            }

        } else {
            alert("입력폼을 다 채워주세요!");
            setLoading(false);
        }
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    return (
        <div className="post-comment-form-background">
            <form>
                <div onClick={handleClose} className='close-post-comment-modal'><CloseBtn /></div>
                <h2>{edit ? "댓글 수정" : "댓글 달기"}</h2>
                <label>닉네임</label>
                <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} placeholder="닉네임을 입력하세요" />
                <label>댓글</label>
                <input className="comment-content" type="text" value={content} onChange={(e) => setContent(e.target.value)} placeholder="댓글을 입력하세요" />
                <label>비밀번호</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호를 입력하세요" />
                <button onClick={handleSubmit} disabled={loading}>등록하기</button>
            </form>
        </div>
    )
}

export default PostCommentForm;