import { useLocation } from "react-router-dom";
import DetailGroupCard from "../components/DetailGroupCard";
import Header from "../components/Other/Header";
import "./GroupDetailPage.css"
import { useEffect, useState } from "react";
import { GroupDetailData } from "../api/GroupApi";
import DDayCal from "../assets/DDayCal";
import GroupCardList from "../components/Card/GroupCardList";
import Menu from "../components/Other/Menu";
import MemoryHeader from "../components/Other/MemoryHeader"
import { UsePublicContext } from "../context/publicContext";

const GroupDetailPage = () => {
    const groupId = useLocation().pathname.slice(7);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        setLoading(true);

        const getData = async () => {
            try {
                const result = await GroupDetailData(groupId);
                setData(result.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, []);

    if (loading) return <div className="loading"></div>;
    if (error) return <div className="error"><p>Error: {error}</p></div>;

    return (
        <div className="groupDetailPageContainer">
            <Header />
            <DetailGroupCard
                badges={data.badges}
                dDay={DDayCal(data.createdAt)}
                id={data.id}
                imageUrl={data.imageUrl}
                introduction={data.introduction}
                isPublic={data.isPublic}
                likeCount={data.likeCount}
                name={data.name}
                postCount={data.postCount} />
            <MemoryHeader />
            <Menu isHome={false} />
            <GroupCardList isHome={false} />
        </div>

    );
}

export default GroupDetailPage;