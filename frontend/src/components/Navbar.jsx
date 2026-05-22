import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar({ user }) {

  const [menuOpen, setMenuOpen] =
    useState(false);

  return (

    <>

      {user?.token && (

        <>

          <div
            className="hamburger"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
          >
            ☰
          </div>

          <aside
            className={`sidebar ${
              menuOpen ? "open" : ""
            }`}
          >

            <h3 className="sidebar-title">
              MENU
            </h3>

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

          </aside>

          {menuOpen && (

            <div
              className="overlay"
              onClick={() =>
                setMenuOpen(false)
              }
            />

          )}

        </>

      )}

    </>

  );

}