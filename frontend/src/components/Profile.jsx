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

  const handleUpdate=useNavigate();

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

      <div className="profile-card">

        <i className="fa-solid fa-user profile-big-icon"></i>

        <div className="name-section">

          <h2>{user?.name}</h2>

          <i
            className="fa-solid fa-pen-to-square edit-icon"
            onClick={() =>
              setEditMode(!editMode)
            }
          ></i>

        </div>

        <p>{user?.email}</p>

        {editMode && (

          <div className="edit-section">

            <input
              type="text"
              value={newName}
              onChange={(e) =>
                setNewName(e.target.value)
              }
              placeholder="Enter new username"
            />

            <button
              onClick={handleUpdate}
            >
              Update Name
            </button>

          </div>

        )}

      </div>

    </div>
 
  );
}

export default Profile;