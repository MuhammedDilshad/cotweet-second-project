import "./App.scss";
import Auth from "./pages/Auth/Auth";
import useTitle from "react-dynamic-title";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";
function App() {
  useTitle("Cotweet");
  return (
    <div className="App">
      <div className="blur" style={{ top: "-8%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-18rem" }}></div>
      {/* <Home /> */}
      {/* <Profile /> */}
      <Auth />
    </div>
  );
}

export default App;
