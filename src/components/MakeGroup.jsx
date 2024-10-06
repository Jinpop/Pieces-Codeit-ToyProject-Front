import { useEffect, useState } from "react";
import SwitchOn from "../assets/tab/SwitchOn";
import SwitchOff from "../assets/tab/SwitchOff";
import "./MakeGroup.css";
import { useNavigate } from "react-router-dom";
import { PostMakeGroup } from "../api/GroupApi";
import { PostImageUrl } from "../api/ImageApi"; // PostImageUrl 함수 import

export const MakeGroup = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [groupImage, setGroupImage] = useState(null);
    const [introduction, setIntroduction] = useState('');
    const [isPublic, setIsPublic] = useState(true);
    const [password, setPassword] = useState('');
    const [fileName, setFileName] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
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

        if (isFormValid) {
            try {
                const imageResponse = await PostImageUrl({ "image": groupImage });
                const uploadedImageUrl = imageResponse.imageUrl; 

                const formData = new FormData();
                formData.append('name', name);
                formData.append('password', password);
                formData.append('imageUrl', uploadedImageUrl); 
                formData.append('isPublic', isPublic);
                formData.append('introduction', introduction);

                await PostMakeGroup(formData); 
                alert("그룹이 성공적으로 생성되었습니다.");
                navigate('/');
            } catch (error) {
                console.error("Error during form submission:", error);
            }
        } else {
            alert("입력폼을 다 채워주세요!");
        }
    };

    useEffect(() => {
        const isFormFilled = name !== '' && introduction !== '' && password !== '' && groupImage !== null;
        setIsFormValid(isFormFilled);
    }, [name, introduction, password, groupImage]);

    return (
        <div className="makeGroupContainer">
            <h3>그룹 만들기</h3>
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

                <label className="groupIntro">
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
    );
};
