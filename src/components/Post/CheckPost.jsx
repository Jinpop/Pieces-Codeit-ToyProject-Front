import "./CheckPost.css"
import { useState } from "react";
import { useParams } from "react-router-dom";
import { PostCheckPost } from "../../api/PostApi";

const CheckPost = ({setSecret}) => {
    const [password, setPassword] = useState("")
    const {postid} = useParams();

    const handleCheck = async () => {
        console.log(password); // password 변수가 정의되어 있어야 함
        try {
            const data = {
                password: password,
            };

            const result = await PostCheckPost(postid, data);

            if (result.message === "비밀번호가 확인되었습니다") {
                alert("비밀번호가 확인되었습니다.");
                setSecret(true);
            } 

        } catch (err) {
            alert("비밀번호가 올바르지 않습니다.");
        }
    }


    return (
        <div className="check-post">
            <h2>비공개 포스트</h2>
            <p>비공개 그룹에 접근하기 위해 권한 확인이 필요합니다</p>
            <div>
                <label>비밀번호를 입력해 주세요</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호를 입력해 주세요" />
            </div>
            <button onClick={handleCheck}>제출하기</button>
        </div>
    )
}

export default CheckPost;