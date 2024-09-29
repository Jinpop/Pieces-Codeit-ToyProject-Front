import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import GroupCardListPage from './pages/GroupCardListPage'
import MakeGroupPage from "./pages/MakeGroupPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GroupCardListPage />} />
        <Route path="register" element={<MakeGroupPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
