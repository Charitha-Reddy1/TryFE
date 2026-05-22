import { useState, useContext } from "react";
import { AppContext } from "../App";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

  const { user, setUser } =
    useContext(AppContext);

  const [menuOpen, setMenuOpen] =
    useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("user");

    setUser(null);

    navigate("/login");

  };

  return (

    <nav className="navbar">

      <h1 className="logo">
        Verbal Reasoning Quiz
      </h1>

      {user && (

        <div className="menu-section">

          <div
            className="hamburger"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
          >
            ☰
          </div>

          {menuOpen && (

            <div className="dropdown-menu">

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

              <button onClick={handleLogout}>
                Logout
              </button>

            </div>

          )}

        </div>

      )}

    </nav>

  );

}

export default Navbar;