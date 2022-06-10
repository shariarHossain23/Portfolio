import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Blog from "./component/Blog/Blog";
import Fotter from "./component/Fotter/Fotter";
import Details from "./component/MyProject/Details";
import Home from "./component/MyProject/Home";
import Header from "./component/Navbar/Header";



function App() {
  return (
    <div className="bg">
      <ToastContainer></ToastContainer>
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/details/:detailId' element={<Details></Details>}></Route>
        <Route path="/blog"element={<Blog></Blog>}></Route>
      </Routes>
      <Fotter/>
    </div>
  );
}

export default App;
