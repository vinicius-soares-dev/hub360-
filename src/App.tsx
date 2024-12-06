import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AdminBlogPage from "./pages/Admin";
import BlogDetail from "./components/blogDetails";
import Bidding from "./pages/Bidding";

function App() {
  const isAdmin = localStorage.getItem('role') === 'admin'; 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bidding" element={<Bidding />} />
        <Route 
          path="/admin" 
          element={isAdmin ? <AdminBlogPage /> : <Navigate to="/login" />} 
        />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>    
    </Router>
  );
}

export default App;
