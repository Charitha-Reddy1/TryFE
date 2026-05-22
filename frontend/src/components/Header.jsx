import "./Header.css";
import { Link } from "react-router-dom";
import { AppContext } from "../App";
import { useContext,useState } from "react";
import logo from "./quiz.webp";

function Header() {

  const { theme, setTheme } =
    useContext(AppContext);

  const { user } =
    useContext(AppContext);
  
  const [menuOpen,setMenuOpen]=useState(false);

return (

    <div
      className={`App-Header ${
        !user?.token ? "logged-out" : ""
      }`}
    >

    {user?.token && (

      <div className="menu-container">

      <div
        className="hamburger"
        onClick={() =>
          setMenuOpen(!menuOpen)
        }
      >
        ☰
      </div>

      <div
        className={`vertical-navbar ${
          menuOpen ? "show-menu" : ""
        }`}
      >

       

          <Link to="/">
            Home
          </Link>

          <Link to="/topics">
            Quiz
          </Link>

          <Link to="/leaderboard">
            Leaderboard
          </Link>

          <Link to="/profile">
            Profile
          </Link>

          <Link to="/logout">
            Logout
          </Link>

        </div>

        {menuOpen && (

        <div
          className="menu-overlay"
          onClick={() =>
            setMenuOpen(false)
          }
        ></div>

      )}

      </div>

    )}

    <div className="header-left">

        <img
          src={logo}
          className="logo"
          alt="logo"
        />

        <h1 >
          Verbal Reasoning Quiz
        </h1>

      </div>

      <ul>

        {!user?.token ? (

          <>

            <li>

              <Link to="/login">

                <button className="nav-btn">
                  Login
                </button>

              </Link>

            </li>

            <li>

              <Link to="/register">

                <button className="nav-btn">
                  Register
                </button>

              </Link>

            </li>

          </>

        ) : (

          <>

            <li className="profile-section">

              <Link to="/profile">

                <i className="fa-solid fa-user profile-icon"></i>

              </Link>
              
              <span>
                Welcome, {user?.name}
              </span>

            </li>

            <li>

              <Link to="/">

                <button className="nav-btn">
                  Home
                </button>

              </Link>

            </li>
                        <li>

              <Link to="/topics">

                <button className="nav-btn">
                  Quiz
                </button>

              </Link>

            </li>

            <li>

              <Link to="/leaderboard">

                <button className="nav-btn">
                  Leaderboard🏆
                </button>

              </Link>

            </li>

            <li>

              <Link to="/logout">

                <button className="nav-btn">
                  Logout
                </button>

              </Link>

            </li>


          </>

        )}

        <li>

          <button
            className="nav-btn"
            onClick={() =>
              setTheme(
                theme === "light"
                  ? "dark"
                  : "light"
              )
            }
          >

            {theme === "light"
              ? "🌙"
              : "☀"}

          </button>

        </li>

      </ul>

    </div>

  );

}

export default Header;