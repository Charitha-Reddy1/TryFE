import { useEffect, useState } from "react";
import axios from "axios";
import "./Leaderboard.css"

function Leaderboard() {

  const [leaders, setLeaders] = useState([]);

  useEffect(() => {

    const API_URL= import.meta.env.VITE_API_URL;

    axios
      .get(
        `${API_URL}/leaderboard/all`
      )
      .then((res) => {
        setLeaders(res.data);
      });

  }, []);

  return (

    <div className="leaderboard-page">

      <h1>Leaderboard</h1>

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