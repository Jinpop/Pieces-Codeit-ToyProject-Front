import "./Header.css"
import Logo from "../../assets/Logo";
import MakeGroupBTN from "../../assets/MakeGroupBTN";
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
    const path = useLocation().pathname;

    const navigate = useNavigate(); // useNavigate 훅 사용

    const handleButtonClick = () => {
        navigate('/register'); // 새로운 경로로 이동
    };

    const handleClick = () => {
        navigate('/');
    }

    return (
        <div className="MainHeader">
            <div className="Logo" onClick={() => handleClick()}>
                <Logo />
            </div>
            {path === '/' ? <div className="MakeGroupBTN" onClick={handleButtonClick}>
                <MakeGroupBTN />
            </div> : ""}
        </div>
    );
};

export default Header;
