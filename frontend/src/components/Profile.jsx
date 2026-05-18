import { useContext, useState } from "react";
import { AppContext } from "../App";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import "./Profile.css";

function Profile() {

  const { user, setUser } =
    useContext(AppContext);

  const [editMode, setEditMode] =
    useState(false);

  const [newName, setNewName] =
    useState(user?.name || "");

  const API_URL =
    import.meta.env.VITE_API_URL;

  const navigate=useNavigate();

  const handleUpdate = async () => {

    try {

      const response =
        await axios.put(

          API_URL +
          "/users/update/" +
          user._id,

          {
            name: newName,
          }

        );

      setUser({
        ...user,
        name: response.data.name,
      });

      setEditMode(false);
      navigate("/");

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="profile-page">

  <div className="profile-container">

    <div className="profile-top">

      <i className="fa-solid fa-user profile-big-icon"></i>

      <div className="profile-details">

        <h1>
          {user?.name}

          <i
            className="fa-solid fa-pen-to-square edit-icon"
            onClick={() =>
              setEditMode(!editMode)
            }
          ></i>

        </h1>

        <p>{user?.email}</p>

        {editMode && (

          <div className="edit-section">

            <input
              type="text"
              value={newName}
              onChange={(e) =>
                setNewName(e.target.value)
              }
            />

            <button onClick={handleUpdate}>
              Update Name
            </button>

          </div>

        )}

      </div>

    </div>

    <div className="profile-stats">

      <div className="stat-box">
        <h2>12</h2>
        <p>Quizzes Completed</p>
      </div>

      <div className="stat-box">
        <h2>89%</h2>
        <p>Best Score</p>
      </div>

      <div className="stat-box">
        <h2>5</h2>
        <p>Leaderboard Rank</p>
      </div>

    </div>

  </div>

</div>
 
  );
}

export default Profile;