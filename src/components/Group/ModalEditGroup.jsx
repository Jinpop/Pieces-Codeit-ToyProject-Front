import "./ModalEditGroup.css"

import { useEffect, useState } from "react";
import SwitchOn from "../../assets/tab/SwitchOn";
import SwitchOff from "../../assets/tab/SwitchOff";
import { useNavigate, useParams } from "react-router-dom";
import { EditGroup, PostMakeGroup } from "../../api/GroupApi";
import { PostImageUrl } from "../../api/ImageApi";
import CloseBtn from "../../assets/CloseBtn";

const ModalEditGroup = ({ setIsEditModalOpen }) => {
    const navigate = useNavigate();
    const {groupid} = useParams();

    const [name, setName] = useState('');
    const [groupImage, setGroupImage] = useState(null);
    const [introduction, setIntroduction] = useState('');
    const [isPublic, setIsPublic] = useState(true);
    const [password, setPassword] = useState('');
    const [fileName, setFileName] = useState('');

    const [loading, setLoading] = useState(false);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setGroupImage(file);
        if (file) {
            setFileName(file.name);
        } else {
            setFileName('');
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            let uploadedImageUrl;
            if (groupImage !== null)
            {
                const imageResponse = await PostImageUrl({ "image": groupImage });
                uploadedImageUrl = imageResponse.imageUrl;
            }
            else {
                uploadedImageUrl = "";
            }


            const data = {
                'name': name,
                'password': password,
                'imageUrl': uploadedImageUrl,
                'isPublic': isPublic,
                'introduction': introduction,
            }
            console.log(groupid)
            await EditGroup(groupid, data);

            alert("그룹이 성공적으로 수정되었습니다.");
            window.location.reload();
        } catch (error) {
            console.error("Error during form submission:", error);
        }
        finally {
            setLoading(false);
        }
    };

    const handleClose = () => {
        setIsEditModalOpen(false)
    }

    return (
        <div className="modal-edit-group-back">
            <div className="modal-edit-group">
                <div onClick={handleClose} className='close-edit-group-modal'><CloseBtn /></div>
                <h3>그룹 수정하기</h3>
                <form className="groupForm" onSubmit={handleSubmit}>
                    <label>
                        <p>그룹명</p>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="그룹명을 입력하세요"
                        />
                    </label>

                    <label className="fileLabel">
                        <p>대표 이미지</p>
                        <div className="fileInputWrapper">
                            <input
                                type="text"
                                value={fileName ? fileName : '파일을 선택해 주세요'}
                                readOnly
                                className="fileNameInput"
                            />
                            <input
                                type="file"
                                id="file"
                                onChange={handleImageChange}
                                accept="image/*"
                                style={{ display: 'none' }}
                            />
                            <button
                                type="button"
                                onClick={() => document.getElementById('file').click()}
                            >
                                파일 선택
                            </button>
                        </div>
                    </label>

                    <label className="groupIntro-edit">
                        <p>그룹 소개</p>
                        <textarea
                            value={introduction}
                            onChange={(e) => setIntroduction(e.target.value)}
                            placeholder="그룹을 소개해 주세요"
                        />
                    </label>
                    <label>
                        <p>그룹 공개 선택</p>
                        <div className="toggleDiv">
                            {isPublic ? <p>공개</p> : <p>비공개</p>}
                            <span onClick={() => setIsPublic(!isPublic)}>
                                {isPublic ? <SwitchOn /> : <SwitchOff />}
                            </span>
                        </div>
                    </label>
                    <label>
                        <p>비밀번호</p>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="비밀번호를 입력해 주세요"
                        />
                    </label>
                    <button
                        type="submit"
                        className="submitBtn"
                        disabled={loading}
                    >
                        만들기
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ModalEditGroup;