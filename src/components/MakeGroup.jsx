import { useState } from "react";
import SwitchOn from "../assets/tab/SwitchOn"
import SwitchOff from "../assets/tab/SwitchOff"
import "./MakeGroup.css"

export const MakeGroup = () => {
    const [groupName, setGroupName] = useState('');
    const [groupImage, setGroupImage] = useState(null);
    const [groupDescription, setGroupDescription] = useState('');
    const [isPublic, setIsPublic] = useState(true);
    const [password, setPassword] = useState('');
    const [fileName, setFileName] = useState('');

    const handleImageChange = (event) => {
        setGroupImage(event.target.files[0]);
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
        } else {
            setFileName('');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ groupName, groupImage, groupDescription, isPublic, password });
    };

    return (
        <div className="makeGroupContainer">
            <h3>그룹 만들기</h3>
            <form className="groupForm" onSubmit={handleSubmit}>
                <label>
                    <p>그룹명</p>
                    <input
                        type="text"
                        value={groupName}
                        onChange={(e) => setGroupName(e.target.value)}
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
                            style={{ display: 'none' }} // 기본 파일 입력 숨기기
                        />
                        <button
                            onClick={() => document.getElementById('file').click()}
                        >
                            파일 선택
                        </button>
                    </div>
                </label>


                <label className="groupIntro">
                    <p>그룹 소개</p>
                    <textarea
                        value={groupDescription}
                        onChange={(e) => setGroupDescription(e.target.value)}
                        placeholder="그룹을 소개해 주세요"
                    />
                </label>
                <label>
                    <p>그룹 공개 선택</p>
                    <div className="toggleDiv">
                        <p>공개</p>
                        <span onClick={() => setIsPublic(!isPublic)}>{isPublic ? <SwitchOn /> : <SwitchOff />}</span>
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
                <button type="submit" className="submitBtn">만들기</button>
            </form>
        </div>
    )
}