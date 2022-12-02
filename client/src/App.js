import "./App.scss";
import Auth from "./pages/Auth/Auth";
import useTitle from "react-dynamic-title";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  console.log("dilsggfdfjfghj");
  const user = useSelector((state) => state.authReducer.authData);
  // const user = null;
  // const user = true;
  // useTitle("Cotweet");
  return (
    <div className="App">
      <div className="blur" style={{ top: "-8%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-18rem" }}></div>
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="home" /> : <Navigate to="auth" />}
        />

        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="../auth" />}
        />

        <Route
          path="/auth"
          element={user ? <Navigate to="../home" /> : <Auth />}
        />

        <Route
          path="/profile/:id"
          element={user ? <Profile /> : <Navigate to="../auth" />}
        />
      </Routes>
    </div>
  );
}

export default App;
