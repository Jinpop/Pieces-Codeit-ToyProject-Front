import "./GroupCardListPage.css"
import Header from "../components/Header";
import Menu from "../components/Menu";
import GroupCardList from "../components/GroupCardList";
import { PublicProvider } from "../context/publicContext"

const GroupCardListPage = () => {
    return (
        <div className="GroupCardListPage">
            <PublicProvider>
                <Header />
                <Menu />
                <GroupCardList />
            </PublicProvider>
        </div>
    );
}

export default GroupCardListPage;