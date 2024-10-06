import { useState } from "react"
import "./EnterPrivateGroup.css"
import { useLocation, useNavigate } from "react-router-dom"
import { CheckPassword } from "../api/GroupApi"

const EnterPrivateGroup = () => {
    const [password, setPassword] = useState("")
    const path = useLocation().pathname
    const groupId = path.slice(15);
    const navigate = useNavigate();

    const handleCheck = async () => {
        console.log(password); // password 변수가 정의되어 있어야 함

        try {
            const data = {
                password: password,
            };

            const result = await CheckPassword(groupId, data);

            console.log(result);

            if (result === "비밀번호가 확인되었습니다") {
                alert("비밀번호가 확인되었습니다.");
                navigate(`/group/${groupId}`);
            } else {
                alert("비밀번호가 올바르지 않습니다.");
            }
        } catch (err) {
            alert("비밀번호가 올바르지 않습니다."); // 서버에서 반환한 오류 메시지 표시
        }
    }

    return (
        <div className="EnterPrivateDiv">
            <h2>비공개 그룹</h2>
            <p>비공개 그룹에 접근하기 위해 권한 확인이 필요합니다</p>
            <div>
                <label>비밀번호를 입력해 주세요</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호를 입력해 주세요" />
            </div>
            <button onClick={handleCheck}>제출하기</button>
        </div>
    )
}

export default EnterPrivateGroup; 