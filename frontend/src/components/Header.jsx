import "./Header.css";
import { Link } from "react-router-dom";
import { AppContext } from "../App";
import { useContext,useState } from "react";
import logo from "./quiz.webp";
//import {AppContext} from '../App'


function Header() {
  const { theme, setTheme } = useContext(AppContext);
  const { user } = useContext(AppContext);

  const [showProfile,setShowProfile]=useState(false);

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
      
      <li className="profile-section">

        <div className="profile-section">

  <i
    className="fa-solid fa-user profile-icon"
    onClick={() =>
      setShowProfile(!showProfile)
    }
  ></i>

  {showProfile && (

    <div className="profile-card">

      <h3>{user.name}</h3> <i
    className="fa-solid fa-pen-to-square edit-icon"></i>

      <p>{user.email}</p>

      <input
        type="text"
        placeholder="New username"
      />

      <button>
        Save
      </button>

      <button>
        Logout
      </button>

    </div>

  )}

</div>

        <span>
          Welcome, {user?.name}
        </span>

      </li>
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