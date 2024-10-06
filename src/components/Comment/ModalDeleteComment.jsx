import "./ModalDeleteComment.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CloseBtn from "../../assets/CloseBtn";
import { DeleteComment } from "../../api/CommentApi";

const ModalDeleteComment = ({ id, setIsDeleteOpen }) => {
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    console.log(id);

    const handleClose = () => {
        setIsDeleteOpen(false);
    }

    const handleDeleteComment = async () => {
        console.log(password);
        try {
            const result = await DeleteComment({ id, password });

            handleClose(); // 모달 닫기

            alert("댓글이 성공적으로 삭제되었습니다.")
            window.location.reload();

        }
        catch (err) {
            console.error("Error deleting group:", err);
            alert("댓글 삭제에 실패했습니다. 비밀번호를 확인해주세요.");
        }
    }

    return (
        <div className='ModalDeleteGroupContainerBack'>
            <div className='ModalDeleteGroupContainer'>
                <div onClick={handleClose} className='closeModal'><CloseBtn /></div>
                <h2>댓글 삭제</h2>
                <div className='passwordDiv'>
                    <p>삭제 권한 인증</p>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="비밀번호를 입력해 주세요"
                    />
                </div>
                <button onClick={handleDeleteComment}>삭제하기</button>
            </div>
        </div>
    );
}

export default ModalDeleteComment