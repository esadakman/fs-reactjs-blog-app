// import { useSelector } from "react-redux";
import NewBlog from "../pages/NewBlog";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
  // useNavigate,
} from "react-router-dom"; 
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"; 
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import Profile from "../pages/Profile";
import PostDetails from "../components/PostDetails";
import { useSelector } from "react-redux";

const AppRouter = () => {  
  const { authUser } = useSelector((state) => state.user);

  function PrivateRouter() {
    return authUser ? <Outlet /> : <Navigate to="/" replace />;
  } 
  return (
    <BrowserRouter >
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/register" element={<Register />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/newblog" element={<NewBlog />} /> 
        <Route path="/profile" element={<Profile />} />   
        <Route path="/details" element={<PrivateRouter />}>
          <Route path="/details:slug" element={<PostDetails />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
