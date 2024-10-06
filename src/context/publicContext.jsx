import { createContext, useContext, useState } from "react";

const PublicContext = createContext();

// 컨텍스트 프로바이더에서 여러 상태 관리
export const PublicProvider = ({ children }) => {
    const [toggleShowContents, setToggleShowContents] = useState(true);
    const [order, setOrder] = useState("최신순");
    const [keyword, setKeyword] = useState("");

    return (
        <PublicContext.Provider value={{ toggleShowContents, setToggleShowContents, order, setOrder, keyword, setKeyword }}>
            {children}
        </PublicContext.Provider>
    );
};

// 컨텍스트 데이터를 사용하는 커스텀 훅
export const UsePublicContext = () => useContext(PublicContext);