import { useEffect, useState } from "react";
import axios from "axios";
import "./Leaderboard.css"

function Leaderboard() {

  const[selectedTopic,setSelectedTopic]=useState("all");
  useEffect(() => {

  const API_URL =
    import.meta.env.VITE_API_URL;

  const url =
    selectedTopic === "all"
      ? `${API_URL}/score/leaderboard/all`
      : `${API_URL}/score/leaderboard/${selectedTopic}`;

  axios.get(url)
    .then((res) => {
      setLeaders(res.data);
    });

}, [selectedTopic]);

  const [leaders, setLeaders] = useState([]);



  return (

    <div className="leaderboard-page">

      <h1>Leaderboard</h1>

      <div className='dropdown-container'>
      <select
  className="topic-dropdown"
  value={selectedTopic}
  onChange={(e) =>
    setSelectedTopic(e.target.value)
  }
>

  <option value="all">
    Overall
  </option>

  <option value="synonyms">
    Synonyms
  </option>

  <option value="antonyms">
    Antonyms
  </option>

  <option value="idioms">
    Idioms
  </option>

</select>
</div>
      <table>

        <thead>
          <tr>
            <th>Rank</th>
            <th>User</th>
            <th>Topic</th>
            <th>Score</th>
          </tr>
        </thead>

        <tbody>

          {leaders.map((item, index) => (

            <tr key={item._id}>

              <td>{index + 1}</td>

              <td>{item.userName}</td>

              <td>{item.topic}</td>

              <td>
                {item.score}/{item.total}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default Leaderboard;