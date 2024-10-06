import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import GroupCardListPage from './pages/GroupCardListPage'
import MakeGroupPage from "./pages/MakeGroupPage";
import GroupDetailPage from "./pages/GroupDetailPage";
import PrivateEnterPage from "./pages/PrivateEnterPage";
import UploadPage from "./pages/UploadPage";
import NotFoundPage from "./pages/NotFoundPage";
import PostDetailPage from "./pages/PostDetailPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GroupCardListPage />} />
          <Route path="register" element={<MakeGroupPage />} />
          <Route path="group/:groupid" element={<GroupDetailPage />} />
          <Route path="private/group/:groupid" element={<PrivateEnterPage />} />
          <Route path="group/:groupid/upload" element={<UploadPage />} />
          <Route path="post/:postid" element={<PostDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
