import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import About from "./component/About/About";
import Banner from "./component/Banner/Banner";
import Contact from "./component/Contact/Contact";
import Fotter from "./component/Fotter/Fotter";
import MyProject from "./component/MyProject/MyProject";
import Header from "./component/Navbar/Header";

function App() {
  return (
    <div className="bg">
      <Header />
      <Banner/>
      <MyProject/>
      <About/>
      <Contact/>
      <Fotter/>
    </div>
  );
}

export default App;
