import './GroupCard.css'
import { NoImg } from "../assets/SampleImg"
import SmallFavicon from "../assets/Favicon"
import { UsePublicContext } from '../context/publicContext';

const GroupCard = ({ name, imageUrl, isPublic, createdAt, badgeCount, postCount, introduction, likeCount }) => {
    const todayDate = new Date();
    const momentDate = new Date(createdAt.substring(0, 10));
    const DDay = Math.floor((todayDate - momentDate) / (1000 * 60 * 60 * 24));
    const { toggleShowContents, setToggleShowContents, order, setOrder } = UsePublicContext();

    return (
        <div className="card">
            {toggleShowContents == true ?
                <div className="ImgContainer"><img src={imageUrl != "" ? imageUrl : NoImg} alt="사진" /></div>
                : ""
            }
            <div className="cardContent">
                <p>D+{DDay} <span className="public">  |  {isPublic ? "공개" : "비공개"}</span></p>
                <p className="cardTitle">{name}</p>
                {toggleShowContents == true ? <p>{introduction}</p> : ""}
                <div className='cardInfo'>
                    {toggleShowContents == true ?
                        <div className='cardInfoBadge'>
                            <p>그룹 배지</p>
                            <p className='cardInfoVal'>{badgeCount}</p>
                        </div>
                        : ""
                    }
                    <div className='cardInfoMemory'>
                        <p>추억</p>
                        <p className='cardInfoVal'>{postCount}</p>
                    </div>
                    <div className='cardInfoEmpathy'>
                        <p>그룹 공감</p>
                        <div className='cardInfoFavi'><SmallFavicon /><p className='cardInfoVal'>{`${likeCount}`}</p></div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default GroupCard;