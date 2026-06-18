import { useContext, useState ,useEffect} from "react";
import { AppContext } from "../App";
import AIAnalasis from "./AIAnalysis";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import "./Profile.css";

function Profile() {

  const { user, setUser } =
    useContext(AppContext);

  const [topicScores,setTopicScores]=useState([]);

  const [stats, setStats] = useState({

      quizzesCompleted: 0,
      bestScore: 0,
      rank: "-",
    });

  useEffect(() => {


  const API_URL =
    import.meta.env.VITE_API_URL;

  axios
    .get(`${API_URL}/score/${user.name}`)
    .then((res) => setTopicScores(res.data))
    .catch((err) => console.log(err));

  axios
    .get(
      `${API_URL}/score/stats/${user.name}`
    )

    .then((res) => {

      setStats(res.data);

    })

    .catch((err) => {

      console.log(err);

    });

}, []);



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
        <h2>{stats.quizzesCompleted}</h2>
        <p>Quizzes Completed</p>
      </div>

      <div className="stat-box">
        <h2>{stats.bestScore}%</h2>
        <p>Best Score</p>
      </div>

      <div className="stat-box">
        <h2>{stats.rank}</h2>
        <p>Leaderboard Rank</p>
      </div>

    </div>


    <AIAnalysis
  topicScores={topicScores}
  userName={user?.name}
    />
  </div>

</div>
 
  );
}

export default Profile;