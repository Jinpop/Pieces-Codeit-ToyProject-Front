// Modal.js
import React, { useState } from 'react';
import './ModalDeleteGroup.css';
import CloseBtn from '../assets/CloseBtn';
import { GroupDelete } from '../api/GroupApi';
import { useLocation, useNavigate } from 'react-router-dom';

const ModalDeleteGroup = ({ setIsModalOpen }) => {
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const path = useLocation().pathname.slice(7);

    const handleClose = () => {
        setIsModalOpen(false);
    }

    const handleDeleteGroup = async () => {
        try {
            const result = await GroupDelete({path, password});
            handleClose(); // 모달 닫기
            if (result === "비밀번호가 틀렸습니다")
            {
                alert("비밀번호가 틀렸습니다.")
            }
            else {
                alert("그룹이 성공적으로 삭제되었습니다.")
                navigate('/');
            }
        }
        catch (err) {
            console.error("Error deleting group:", err);
            alert("그룹 삭제에 실패했습니다. 다시 시도해 주세요.");
        }
    }

    return (
        <div className='ModalDeleteGroupContainerBack'>
            <div className='ModalDeleteGroupContainer'>
                <div onClick={handleClose} className='closeModal'><CloseBtn /></div>
                <h2>그룹 삭제</h2>
                <div className='passwordDiv'>
                    <p>삭제 권한 인증</p>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="비밀번호를 입력해 주세요"
                    />
                </div>
                <button onClick={handleDeleteGroup}>삭제하기</button>
            </div>
        </div>
    );
};

export default ModalDeleteGroup;

