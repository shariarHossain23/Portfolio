import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Banner from "./component/Banner/Banner";
import Header from "./component/Navbar/Header";

function App() {
  return (
    <div className="bg">
      <Header />
      <Banner/>
    </div>
  );
}

export default App;
