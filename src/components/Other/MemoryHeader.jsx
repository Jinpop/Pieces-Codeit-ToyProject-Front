import "./MemoryHeader.css"
import { useNavigate, useParams } from 'react-router-dom';

const MemoryHeader = () => {
    const navigate = useNavigate(); // useNavigate 훅 사용

    const handleClick = () => {
        navigate('upload');
    }

    return (
        <div className="MemoryHeader">
            <h2>추억목록</h2>
            <button onClick={handleClick}>추억올리기</button>
        </div>
    );
};

export default MemoryHeader;
