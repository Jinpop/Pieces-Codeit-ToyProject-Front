import './GroupCard.css'
import { NoImg } from "../../assets/SampleImg"
import SmallFavicon from "../../assets/Favicon"
import { UsePublicContext } from '../../context/publicContext';
import { useNavigate } from 'react-router-dom';

const GroupCard = ({ id, name, imageUrl, isPublic, dDay, badgeCount, postCount, introduction, likeCount }) => {
    const { toggleShowContents } = UsePublicContext();
    
    const navigate = useNavigate();

    const handleClick = () => {
        if (isPublic) {
            navigate(`/group/${id}`)
        }
        else {
            navigate(`/private/group/${id}`)
        }
    }

    return (
        <div className="card" onClick={handleClick}>
            {toggleShowContents == true ?
                <div className="ImgContainer"><img src={imageUrl ? imageUrl : NoImg} alt="사진" /></div>
                : ""
            }
            <div className="cardContent">
                <p>D+{dDay} <span className="public">  |  {isPublic ? "공개" : "비공개"}</span></p>
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