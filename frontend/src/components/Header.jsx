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
        <li>
          <span>Welcome, {user.name}</span>
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