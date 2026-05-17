import "./Header.css";
import { Link } from "react-router-dom";
import { AppContext } from "../App";
import { useContext } from "react";
import logo from "./quiz.webp";
//import {AppContext} from '../App'


function Header() {
  const { theme, setTheme } = useContext(AppContext);


  const { user } = useContext(AppContext);
  return (
    <div className="App-Header">
      <h1>Verbal Reasoning Quiz</h1>
      <img src={logo} className="logo" />
        <ul>

    {!user?.token ? (
      <>
        <li>
          <Link to="/login">
            <button className="nav-btn">Login</button>
          </Link>
        </li>

        <li>
          <Link to="/register">
            <button className="nav-btn">Register</button>
          </Link>
        </li>
      </>
    ) : (
      <>
      
      <div className="profile-section">

      <i className="fa-solid fa-user profile-icon"></i>

      <span>
        Welcome, {user?.name}
      </span>

    </div>
        <li>
          <Link to="/">
            <button className="nav-btn">Home</button>
          </Link>
        </li>

        <li>
          <Link to="/leaderboard">
            <button className="nav-btn">Leaderboard🏆</button>
          </Link>
        </li>
        <li>
          <Link to="/logout">
            <button className="nav-btn">Logout</button>
          </Link>
        </li>
      </>
    )}

    <li>
      <button
        className="nav-btn"
        onClick={() =>
          setTheme(theme === "light" ? "dark" : "light")
        }
      >
        {theme === "light" ? "🌙" : "☀"}
      </button>
    </li>

  </ul>
    </div>
  );
}
export default Header;