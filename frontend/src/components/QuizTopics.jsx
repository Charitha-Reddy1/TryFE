import "./QuizTopics.css";
import { Link } from "react-router-dom";
import {
  useEffect,
  useState,
  useContext
} from "react";

import axios from "axios";
import { AppContext } from "../App";

function QuizTopics() {

  const { user } = useContext(AppContext);

  const [scores, setScores] = useState([]);

  const topics = [

    {
      title: "Synonyms",
      path: "synonyms",
      desc: "Meaning of words",
    },

    {
      title: "Antonyms",
      path: "antonyms",
      desc: "Opposite of words",
    },

    {
      title: "Idioms and Phrases",
      path: "idioms",
      desc: "Idioms and Phrases",
    },

    {
      title: "Change of Speech",
      path: "speech",
      desc: "Direct to Indirect,Indirect to Direct",
    },

    {
      title: "Change of Voice",
      path: "voice",
      desc: "Active to Passive ,Passive to Active",
    },

    {
      title: "One Word Substitutes",
      path: "oneword",
      desc: "Many to One",
    },

    {
      title: "Sentence Correction",
      path: "incorrectpart",
      desc: "Identify error",
    },

    {
      title: "Fill in the blanks",
      path: "fillblanks",
      desc: "Find the correct word",
    },

    {
      title: "Spelling correction",
      path: "spelling",
      desc: "Find correct spelling",
    },

    {
      title: "Order of sentence",
      path: "order",
      desc: "Find correct sentence order",
    },

  ];

  useEffect(() => {

    if (user?.name) {

      const API_URL = import.meta.env.VITE_API_URL;

      axios.get(
        `${API_URL}/score/${user.name}`
      )

        .then((res) => {
          setScores(res.data);
        });

    }

  }, [user]);

  const getTopicScore = (topicPath) => {

    return scores.find(
      (item) => item.topic === topicPath
    );

  };

  return (

    <div className="topics-page">

      <h1 className="topics-title">
        Verbal Reasoning Topics
      </h1>

      <div className="topics-grid">

        {topics.map((topic) => {

          const topicScore =
            getTopicScore(topic.path);

          return (

            <Link
              key={topic.path}
              to={`/quiz/${topic.path}`}
              className="topic-card"
            >

              <div className="topic-icon">
                📘
              </div>

              <h2>
                {topic.title}
              </h2>

              <p>
                {topic.desc}
              </p>

              {topicScore ? (

                <div className="topic-score">

                  <p>
                    Score:
                    {" "}
                    {topicScore.score}
                    /
                    {topicScore.total}
                  </p>

                  <button className="reattempt-btn">
                    Reattempt
                  </button>

                </div>

              ) : (

                <button className="start-btn">
                  Start Quiz
                </button>

              )}

            </Link>

          );

        })}

      </div>

    </div>

  );

}

export default QuizTopics;