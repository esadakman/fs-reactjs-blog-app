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
import { toastWarn } from "../helpers/customToastify";
import MyPosts from "../pages/MyPosts";
import SearchPage from "../pages/SearchPage";
import ScrollToTop from "../helpers/ScrollToTop";

const AppRouter = () => {
  const { authUser } = useSelector((state) => state.user);

  function PrivateRouter() {
    if (authUser) {
      return <Outlet />;
    } else {
      toastWarn("You should login to see details");
      return <Navigate to="/login" replace />;
    }
    // return authUser ? <Outlet /> : <Navigate to="/" replace />;
  }
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/myposts" element={<PrivateRouter />}> */}
          <Route path="/myposts" element={<MyPosts />} />
          {/* </Route> */}
          <Route path="/newblog" element={<PrivateRouter />}>
            
            <Route path="/newblog" element={<NewBlog />} />
          </Route>
          <Route path="/profile" element={<PrivateRouter />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/search" element={<PrivateRouter />}>
            <Route path="/search:param" element={<SearchPage />} />
          </Route>
          <Route path="/details" element={<PrivateRouter />}>
            <Route path="/details:slug" element={<PostDetails />} />
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
