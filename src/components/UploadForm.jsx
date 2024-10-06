import { useEffect, useState } from "react";
import "./UploadForm.css"
import SwitchOn from "../assets/tab/SwitchOn";
import SwitchOff from "../assets/tab/SwitchOff";
import { useLocation, useNavigate } from "react-router-dom";
import { PostImageUrl } from "../api/ImageApi";
import { PostMemory } from "../api/GroupApi";


const UploadForm = () => {
    const navigate = useNavigate();
    const path = useLocation().pathname;
    const groupId = path.slice(7).slice(0,path.length-14)

    const [nickname, setNickname] = useState("");
    const [title, setTitle] = useState("");
    const [image, setImage] = useState(null);
    const [content, setContent] = useState("");
    const [tags, setTags] = useState([]);
    const [tagInput, setTagInput] = useState("");
    const [location, setLocation] = useState("");
    const [memoryDate, setMemoryDate] = useState("");
    const [password, setPassword] = useState("");
    const [groupPassword, setGroupPassword] = useState("");
    const [isPublic, setIsPublic] = useState(true);
    const [fileName, setFileName] = useState('');
    const [loading, setLoading] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImage(file);
        if (file) { 
            setFileName(file.name);
        } else {
            setFileName('');
        }
    };

    useEffect(() => {
        const isFormFilled = title !== '' && content !== '' && password !== '' && image !== null && nickname !== '' && memoryDate !== '' && location !== '';
        setIsFormValid(isFormFilled);
    }, [title, content, password, image, location, memoryDate, nickname]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        if (isFormValid) {
            try {
                const imageResponse = await PostImageUrl({ "image": image });
                const uploadedImageUrl = imageResponse.imageUrl;

                const data =
                {
                    "nickname": nickname,
                    "title": title,
                    "content": content,
                    "postPassword": password,
                    "groupPassword": groupPassword,
                    "imageUrl": uploadedImageUrl,
                    "tags": tags,
                    "location": location,
                    "moment": memoryDate,
                    "isPublic": isPublic
                }

                const result = await PostMemory(groupId, data);
                alert("성공적으로 추억이 등록되었습니다.");
                navigate(path.slice(0,path.length-7));           
            } catch (error) {
                alert("그룹 비밀번호를 확인해주세요")
            }
            finally{
                setLoading(false);
            }
        } else {
            alert("입력폼을 다 채워주세요!");
            setLoading(false);
        }
    };

    // 태그 추가 핸들러
    const handleAddTag = (e) => {
        if (e.key === "Enter" && tagInput.trim()) {
            setTags([...tags, tagInput.trim()]);
            setTagInput("");
        }
    };

    // 태그 삭제 핸들러
    const handleRemoveTag = (index) => {
        const newTags = tags.filter((_, i) => i !== index);
        setTags(newTags);
    };

    return (
        <div className="form-container">
            <h2>추억 올리기</h2>
            <div className="form">
                <div className="left">
                    <div className="form-group">
                        <label>닉네임</label>
                        <input
                            type="text"
                            value={nickname}
                            onChange={(e) => setNickname(e.target.value)}
                            placeholder="닉네임을 입력해 주세요"
                        />
                    </div>

                    <div className="form-group">
                        <label>제목</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="제목을 입력해 주세요"
                        />
                    </div>

                    <div className="form-group">
                        <label>이미지</label>
                        <div className="form-group-fileInputWrapper">
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
                    </div>

                    <div className="form-group">
                        <label>본문</label>
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="본문 내용을 입력해 주세요"
                        />
                    </div>
                </div>

                <div className="right">
                    <div className="form-group">
                        <label>태그</label>
                        <input
                            type="text"
                            value={tagInput}
                            onChange={(e) => setTagInput(e.target.value)}
                            onKeyPress={handleAddTag}
                            placeholder="태그를 입력 후 엔터를 누르세요"
                        />
                        <div className="tags-container">
                            {tags.map((tag, index) => (
                                <div className="tagss" key={index}>
                                    <span>{tag}</span>
                                    <button onClick={() => handleRemoveTag(index)}>X</button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="form-group">
                        <label>장소</label>
                        <input
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="장소를 입력해 주세요"
                        />
                    </div>

                    <div className="form-group">
                        <label>추억의 순간</label>
                        <input
                            type="date"
                            value={memoryDate}
                            onChange={(e) => setMemoryDate(e.target.value)}
                            placeholder="YYYY-MM-DD"
                        />
                    </div>

                    <div className="form-group">
                        <label>추억 공개 선택</label>
                        <div className="form-group-toggle">
                            {isPublic ? <p>공개</p> : <p>비공개</p>}
                            <span onClick={() => setIsPublic(!isPublic)}>
                                {isPublic ? <SwitchOn /> : <SwitchOff />}
                            </span>
                        </div>

                    </div>

                    <div className="form-group">
                        <label>게시글 비밀번호</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="게시글 비밀번호를 입력해 주세요"
                        />
                    </div>

                    <div className="form-group">
                        <label>그룹 비밀번호</label>
                        <input
                            type="password"
                            value={groupPassword}
                            onChange={(e) => setGroupPassword(e.target.value)}
                            placeholder="그룹 비밀번호를 입력해 주세요"
                        />
                    </div>
                </div>
            </div>

            <button className="submit-btn" onClick={handleSubmit} disabled={loading}>올리기</button>
        </div>
    );
};

export default UploadForm;