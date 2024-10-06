import "./ModalDeletePost.css"

import { useState } from "react";
import CloseBtn from "../../assets/CloseBtn";
import { useNavigate, useParams } from "react-router-dom";
import { DeleteMemory } from "../../api/PostApi";

const ModalDeletePost = ({ setIsDeleteOpen }) => {

    const navigate = useNavigate();
    const [postPassword, setPostPassword] = useState("");
    const { postid } = useParams();
    const [loading, setLoading] = useState(false);

    const handleDeletePost = async (event) => {
        event.PreventDe
        setLoading(true);

        try {
            const result = await DeleteMemory({postid, postPassword });
            handleClose(); // 모달 닫기

            alert("추억이 성공적으로 삭제되었습니다.")
            navigate('/');
        }
        catch (err) {
            console.error("Error deleting post:", err);
            alert("추억 삭제에 실패했습니다. 비밀번호를 확인해주세요.");
        }
        finally {
            setLoading(false);
        }
    }

    const handleClose = () => {
        setIsDeleteOpen(false);
    }

    return (
        <div className='modal-delete-post'>
            <form>
                <div onClick={handleClose} className='closeModal'><CloseBtn /></div>
                <h2>추억 삭제</h2>
                <div className='passwordDiv'>
                    <p>삭제 권한 인증</p>
                    <input
                        type="password"
                        value={postPassword}
                        onChange={(e) => setPostPassword(e.target.value)}
                        placeholder="비밀번호를 입력해 주세요"
                    />
                </div>
                <button onClick={handleDeletePost} disabled={loading}>삭제하기</button>
            </form>
        </div>
    )
}

export default ModalDeletePost;