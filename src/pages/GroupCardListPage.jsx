import "./GroupCardListPage.css"
import Header from "../components/Other/Header";
import Menu from "../components/Other/Menu";
import GroupCardList from "../components/Card/GroupCardList";
import { PublicProvider } from "../context/publicContext";

const GroupCardListPage = () => {
    return (
        <div className="GroupCardListPage">
            <PublicProvider>
                <Header />
                <Menu />
                <GroupCardList isHome={true}/>
            </PublicProvider>
        </div>
    );
}

export default GroupCardListPage;