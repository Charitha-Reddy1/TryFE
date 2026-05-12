import "./Home.css";
import {useContext} from "react";
import {AppContext} from "../App";
import { Link } from "react-router-dom";

function Home() {

  const { user } = useContext(AppContext);

  return (
    <div className="home-page">

      <h1>
        Welcome to Quiz App 🎯
        {user?.name ? `, ${user.name}` : ""}
      </h1>

      <p>Practice quizzes and improve your skills.</p>


      {user?.token && (
        <Link to="/topics">
          <button className="nav-btn">Quiz</button>
        </Link>
      )}

    </div>
  );
}




export default Home;