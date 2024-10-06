import './MemoryCard.css'
import { NoImg } from "../../assets/SampleImg"
import CommentIcon from '../../assets/icon/CommentIcon';
import { UsePublicContext } from '../../context/publicContext';
import { useLocation, useNavigate } from 'react-router-dom';
import FaviS from '../../assets/icon/FaviS';

const MemoryCard = ({ id, nickname, title, imageUrl, isPublic, dDay, commentCount, likeCount, tags, location, moment }) => {
    const { toggleShowContents } = UsePublicContext();

    const navigate = useNavigate();

    const handleClick = () => {
        if (isPublic) {
            navigate(`/post/${id}`)
        }
        else {
            navigate(`/post/${id}`)
        }
    }

    return (
        <div className="Memorycard" onClick={handleClick}>
            {toggleShowContents == true ?
                <div className="MemoryImgContainer"><img src={imageUrl ? imageUrl : NoImg} alt="사진" /></div>
                : ""
            }


            <div className="MemorycardContent">
                <p>{nickname} <span className="Memorypublic">  |  {isPublic ? "공개" : "비공개"}</span></p>

                <p className="MemorycardTitle">{title}</p>
                {
                    isPublic ?
                        <div className='MemorytagsDiv'>
                            {tags.map((tags, index) => (
                                <p key={index}>#{tags}&nbsp;</p>
                            ))}
                        </div>
                        :
                        ""
                }

                <div className='MemorycardInfo'>
                    <div className='MemorylocaTime'>
                        <p>{location}</p>
                        <p>{moment.slice(0, 10) + " " + moment.slice(11,16)}</p>
                    </div>

                    <div className='MemorycardInfoFavi'>
                        <FaviS /><p>{`${likeCount}`}</p>
                        <CommentIcon /><p>{`${commentCount}`}</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default MemoryCard;