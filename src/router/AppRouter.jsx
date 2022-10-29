// import { useSelector } from "react-redux";
import NewBlog from "../pages/NewBlog";
import {
  BrowserRouter,
  // Navigate,
  // Outlet,
  Route,
  Routes,
} from "react-router-dom"; 
// import Footer from "../components/Footer";
import Navbar from "../components/Navbar"; 
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const AppRouter = () => {
  // const navigate = useNavigate();
  // const user = true
  // const { user } = useSelector((state) => state.auth);

  // function PrivateRouter() {
  //   return user ? <Outlet /> : <Navigate to="/" replace />;
  // } 
  return (
    <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/register" element={<Register />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/newblog" element={<NewBlog />} /> 
        {/* <Route path="/details" element={<PrivateRouter />}>
          <Route path="/" element={<Home />} />
        </Route>  */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default AppRouter;
