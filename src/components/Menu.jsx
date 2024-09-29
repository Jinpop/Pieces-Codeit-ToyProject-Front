import { useState } from "react";
import PrivateOff from "../assets/tab/PrivateOff";
import PrivateOn from "../assets/tab/PrivateOn";
import PublicOff from "../assets/tab/PublicOff";
import PublicOn from "../assets/tab/PublicOn";
import SearchIcon from "../assets/icon/SearchIcon";
import ArrowDown from "../assets/icon/ArrowDown";
import { UsePublicContext } from "../context/publicContext";

import "./Menu.css"

const Menu = () => {
    const { toggleShowContents, setToggleShowContents, order, setOrder, keyword, setKeyword } = UsePublicContext();
    const [isOpen, setIsOpen] = useState(false);

    const onClickHandle = (set) => {
        if (set == "public") {
            setToggleShowContents(true);
        }
        else if (set == "private") {
            setToggleShowContents(false);
        }
    }

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    const changeOrder = (orderText) => {
        setOrder(orderText);
        setIsOpen(false);
    }

    const handleChange = (e) => {
        setKeyword(e.target.value);
        console.log(keyword);
    }

    return (
        <div className="Menu">
            <div className="ToggleShowContents">
                <button onClick={() => onClickHandle("public")}>{toggleShowContents ? <PublicOn /> : <PublicOff />}</button>
                <button onClick={() => onClickHandle("private")}>{toggleShowContents ? <PrivateOff /> : <PrivateOn />}</button>
            </div>
            <div className="SearchContainer">
                <div><SearchIcon /></div>
                <input type="text" placeholder="그룹명을 검색해 주세요" value={keyword} onChange={(e) => handleChange(e)}/>
            </div>
            <div className="DropBox" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

                {isOpen ? (
                    <div className="DropBoxMenu">
                        <a className="FirstMenu">{order}</a>
                        {order != "공감순" && <a onClick={() => changeOrder("공감순")}>공감순</a>}
                        {order != "추천순" && <a onClick={() => changeOrder("추천순")}>추천순</a>}
                        {order != "최신순" && <a onClick={() => changeOrder("최신순")}>최신순</a>}
                        {order != "획득배지순" && <a onClick={() => changeOrder("획득배지순")}>획득배지순</a>}
                    </div>

                ) :
                    <div className="DropBoxButton">
                        <p>{order}</p>
                        <ArrowDown />
                    </div>}
            </div>
        </div>
    );
};

export default Menu;
