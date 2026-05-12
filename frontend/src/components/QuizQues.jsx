import { useState,useContext } from "react";
import "./QuizQues.css";
import {Link,useParams} from "react-router-dom";
import backIcon from "../assets/back.png"
import {topicMeta} from "../components/topicMeta"
import axios from "axios";
import {AppContext} from "../App";


function QuizQues() {

const {user}=useContext(AppContext);
const {topic}=useParams();

const allQuestions = {

    synonyms:[
    {
      text: "Choose the synonym of 'Ubiquitous'",
      options: [
        "Rare",
        "Present everywhere",
        "Dangerous",
        "Temporary",
      ],
      answer: "Present everywhere",
    },

    {
      text: "Choose the synonym of 'Pragmatic'",
      options: [
        "Emotional",
        "Idealistic",
        "Practical",
        "Careless",
      ],
      answer: "Practical",
    },

    {
      text: "Choose the synonym of 'Ephemeral'",
      options: [
        "Eternal",
        "Short-lived",
        "Powerful",
        "Transparent",
      ],
      answer: "Short-lived",
    },

    {
      text: "Choose the synonym of 'Obsolete'",
      options: [
        "Modern",
        "Ancient",
        "Outdated",
        "Important",
      ],
      answer: "Outdated",
    },

    {
      text: "Choose the synonym of 'Meticulous'",
      options: [
        "Careless",
        "Detailed and careful",
        "Aggressive",
        "Quick",
      ],
      answer: "Detailed and careful",
    },

    {
        text: "Choose the synonym of 'Loquacious'",
        options: [
        "Silent",
        "Talkative",
        "Dangerous",
        "Lazy",
        ],
        answer: "Talkative",
    },

    {
        text: "Choose the synonym of 'Obdurate'",
        options: [
        "Flexible",
        "Stubborn",
        "Friendly",
        "Sensitive",
        ],
        answer: "Stubborn",
    },

    {
        text: "Choose the synonym of 'Magnanimous'",
        options: [
        "Generous",
        "Cruel",
        "Weak",
        "Fearful",
        ],
        answer: "Generous",
    },

    {
        text: "Choose the synonym of 'Austere'",
        options: [
        "Luxurious",
        "Simple and strict",
        "Colorful",
        "Cheerful",
        ],
        answer: "Simple and strict",
    },

    {
        text: "Choose the synonym of 'Enigmatic'",
        options: [
        "Obvious",
        "Mysterious",
        "Transparent",
        "Ordinary",
        ],
        answer: "Mysterious",
    },

    
    ],

    antonyms:[

        {
        text: "Choose the antonym of 'Mitigate'",
        options: [
        "Reduce",
        "Aggravate",
        "Ease",
        "Relieve",
        ],
        answer: "Aggravate",
    },

    {
        text: "Choose the antonym of 'Benevolent'",
        options: [
        "Kind",
        "Generous",
        "Cruel",
        "Helpful",
        ],
        answer: "Cruel",
    },

    {
        text: "Choose the antonym of 'Lucid'",
        options: [
        "Clear",
        "Confusing",
        "Simple",
        "Transparent",
        ],
        answer: "Confusing",
    },

    {
        text: "Choose the antonym of 'Meticulous'",
        options: [
        "Careful",
        "Detailed",
        "Negligent",
        "Organized",
        ],
        answer: "Negligent",
    },

    {
        text: "Choose the antonym of 'Candid'",
        options: [
        "Honest",
        "Frank",
        "Secretive",
        "Open",
        ],
        answer: "Secretive",
    },
    ],

    idioms: [

  {
    text: "What does 'Break the ice' mean?",
    options: [
      "Start a conversation",
      "Break something cold",
      "Create trouble",
      "Feel nervous",
    ],
    answer: "Start a conversation",
  },

  {
    text: "What does 'Hit the sack' mean?",
    options: [
      "Fight someone",
      "Go to sleep",
      "Carry luggage",
      "Win a game",
    ],
    answer: "Go to sleep",
  },

  {
    text: "What does 'Spill the beans' mean?",
    options: [
      "Cook food",
      "Reveal a secret",
      "Waste money",
      "Make a mistake",
    ],
    answer: "Reveal a secret",
  },



  {
    text: "What is the meaning of 'In black and white'?",
    options: [
      "Written clearly",
      "Colorless",
      "In confusion",
      "In darkness",
    ],
    answer: "Written clearly",
  },

  {
    text: "What does 'At the eleventh hour' mean?",
    options: [
      "Very early",
      "At the last moment",
      "At midnight",
      "On time",
    ],
    answer: "At the last moment",
  },

  {
    text: "What does 'By and large' mean?",
    options: [
      "Partially",
      "On average",
      "Completely confused",
      "Very quickly",
    ],
    answer: "On average",
  },

],

speech: [

  {
    text: "Choose the correct indirect speech:",
    options: [
      "He said that he was busy.",
      "He said, I am busy.",
      "He says he busy.",
      "He said he is busy.",
    ],
    answer: "He said that he was busy.",
  },

  {
    text: "Choose the correct indirect speech for: She said, 'I can solve this problem.'",
    options: [
      "She said that she could solve that problem.",
      "She said she can solve this problem.",
      "She said that I could solve this problem.",
      "She said that she solve the problem.",
    ],
    answer: "She said that she could solve that problem.",
  },

  {
    text: "Choose the correct indirect speech:",
    options: [
      "Ravi asked where I was going.",
      "Ravi asked where are you going.",
      "Ravi asked where was I going.",
      "Ravi asked where you are going.",
    ],
    answer: "Ravi asked where I was going.",
  },

  {
    text: "Choose the correct indirect speech for: He said, 'Do you like coffee?'",
    options: [
      "He asked if I liked coffee.",
      "He asked do I like coffee.",
      "He said if I like coffee.",
      "He asked that I liked coffee.",
    ],
    answer: "He asked if I liked coffee.",
  },

  {
    text: "Choose the correct indirect speech:",
    options: [
      "The teacher advised the students to work hard.",
      "The teacher said students work hard.",
      "The teacher advised that students worked hard.",
      "The teacher advises students to worked hard.",
    ],
    answer: "The teacher advised the students to work hard.",
  },

],



voice: [

  {
    text: "Choose the correct passive voice:",
    options: [
      "English is spoken worldwide.",
      "People are spoken English worldwide.",
      "English speaks worldwide.",
      "People speak English worldwide.",
    ],
    answer: "English is spoken worldwide.",
  },

  {
    text: "Choose the correct passive form of: 'The chef cooked the meal.'",
    options: [
      "The meal was cooked by the chef.",
      "The meal cooked by the chef.",
      "The chef was cooked the meal.",
      "The meal is cooked by the chef.",
    ],
    answer: "The meal was cooked by the chef.",
  },

  {
    text: "Choose the correct active voice:",
    options: [
      "The homework was completed by Riya.",
      "Riya completed the homework.",
      "The homework completed Riya.",
      "Riya was completed the homework.",
    ],
    answer: "Riya completed the homework.",
  },

  {
    text: "Choose the correct passive voice of: 'They will announce the results tomorrow.'",
    options: [
      "The results will be announced tomorrow.",
      "The results are announced tomorrow.",
      "The results announced tomorrow.",
      "They are announcing the results tomorrow.",
    ],
    answer: "The results will be announced tomorrow.",
  },

  {
    text: "Choose the correct passive voice:",
    options: [
      "The book was written by the author.",
      "The author written the book.",
      "The book wrote the author.",
      "The author was written the book.",
    ],
    answer: "The book was written by the author.",
  },

],

oneword: [

  {
    text: "A person who can speak many languages is called:",
    options: [
      "Linguist",
      "Monarch",
      "Polyglot",
      "Orator",
    ],
    answer: "Polyglot",
  },

  {
    text: "A place where books are kept is called:",
    options: [
      "Museum",
      "Library",
      "Aquarium",
      "Laboratory",
    ],
    answer: "Library",
  },

  {
    text: "A person who studies stars and planets is called:",
    options: [
      "Biologist",
      "Astronomer",
      "Geologist",
      "Historian",
    ],
    answer: "Astronomer",
  },

  {
    text: "A speech delivered without preparation is called:",
    options: [
      "Debate",
      "Lecture",
      "Extempore",
      "Seminar",
    ],
    answer: "Extempore",
  },

  {
    text: "A person who does not believe in God is called:",
    options: [
      "Atheist",
      "Optimist",
      "Philanthropist",
      "Believer",
    ],
    answer: "Atheist",
  },

],

incorrectpart: [

  {
    text: "Identify the incorrect part in the sentence: 'Each of the boys have completed their homework carefully.'",
    options: [
      "Each of the boys",
      "have completed",
      "their homework",
      "carefully",
    ],
    answer: "have completed",
  },

  {
    text: "Identify the incorrect part in the sentence: 'He is senior than his colleague in experience.'",
    options: [
      "He is",
      "senior than",
      "his colleague",
      "in experience",
    ],
    answer: "senior than",
  },

  {
    text: "Identify the incorrect part in the sentence: 'She would rather to stay at home today.'",
    options: [
      "She would rather",
      "to stay",
      "at home",
      "today",
    ],
    answer: "to stay",
  },

  {
    text: "Identify the incorrect part in the sentence: 'The data is incorrect for this experiment today.'",
    options: [
      "The data",
      "is incorrect",
      "for this experiment",
      "today",
    ],
    answer: "is incorrect",
  },

  {
    text: "Identify the incorrect part in the sentence: 'Neither of the students were prepared for the competition yesterday.'",
    options: [
      "Neither of the students",
      "were prepared",
      "for the competition",
      "yesterday",
    ],
    answer: "were prepared",
  },

],

fillblanks: [

  {
    text: "Fill in the blank: Scarcely had the train left ___ the accident occurred.",
    options: [
      "than",
      "when",
      "then",
      "that",
    ],
    answer: "when",
  },

  {
    text: "Fill in the blank: She is fond ___ reading novels.",
    options: [
      "in",
      "of",
      "with",
      "for",
    ],
    answer: "of",
  },

  {
    text: "Fill in the blank: Neither the teacher nor the students ___ present yesterday.",
    options: [
      "was",
      "were",
      "is",
      "has",
    ],
    answer: "were",
  },

  {
    text: "Fill in the blank: Hardly had he entered the room ___ everyone started clapping.",
    options: [
      "when",
      "than",
      "that",
      "while",
    ],
    answer: "when",
  },

  {
    text: "Fill in the blank: She succeeded ___ convincing the manager.",
    options: [
      "at",
      "in",
      "for",
      "with",
    ],
    answer: "in",
  },

],

spelling: [

  {
    text: "Choose the correctly spelled word:",
    options: [
      "Treachrous",
      "Trecherous",
      "Trechearous",
      "Treacherous",
    ],
    answer: "Treacherous",
  },

  {
    text: "Choose the correctly spelled word:",
    options: [
      "Forcast",
      "Forecaste",
      "Forcaust",
      "Forecast",
    ],
    answer: "Forecast",
  },

  {
    text: "Choose the correctly spelled word:",
    options: [
      "Rigerous",
      "Rigourous",
      "Regerous",
      "Rigorous",
    ],
    answer: "Rigorous",
  },

  {
    text: "Choose the correctly spelled word:",
    options: [
      "Palete",
      "Palet",
      "Palate",
      "Pelate",
    ],
    answer: "Palate",
  },

  {
    text: "Choose the correctly spelled word:",
    options: [
      "Bouquete",
      "Bouquette",
      "Bouquet",
      "Boqquet",
    ],
    answer: "Bouquet",
  },

],

order: [

  {
    text: "Arrange the words in a meaningful sequence: Key, Door, Lock, Room, Switch on",
    options: [
      "5, 1, 2, 4, 3",
      "4, 2, 1, 5, 3",
      "1, 3, 2, 4, 5",
      "1, 2, 3, 5, 4",
    ],
    answer: "1, 3, 2, 4, 5",

    passage: {
      1: "Key",
      2: "Door",
      3: "Lock",
      4: "Room",
      5: "Switch on",
    },
  },

  {
    text: "Arrange the words in a meaningful sequence: Word, Paragraph, Sentence, Letters, Phrase",
    options: [
      "4, 1, 5, 2, 3",
      "4, 1, 3, 5, 2",
      "4, 2, 5, 1, 3",
      "4, 1, 5, 3, 2",
    ],
    answer: "4, 1, 5, 3, 2",

    passage: {
      1: "Word",
      2: "Paragraph",
      3: "Sentence",
      4: "Letters",
      5: "Phrase",
    },
  },

  {
    text: "Arrange the words in a meaningful sequence: Police, Punishment, Crime, Judge, Judgement",
    options: [
      "3, 1, 2, 4, 5",
      "1, 2, 4, 3, 5",
      "5, 4, 3, 2, 1",
      "3, 1, 4, 5, 2",
    ],
    answer: "3, 1, 4, 5, 2",

    passage: {
      1: "Police",
      2: "Punishment",
      3: "Crime",
      4: "Judge",
      5: "Judgement",
    },
  },

  {
    text: "Arrange the words in a meaningful sequence: Family, Community, Member, Locality, Country",
    options: [
      "3, 1, 2, 4, 5",
      "3, 1, 2, 5, 4",
      "3, 1, 4, 2, 5",
      "3, 1, 4, 5, 2",
    ],
    answer: "3, 1, 2, 4, 5",

    passage: {
      1: "Family",
      2: "Community",
      3: "Member",
      4: "Locality",
      5: "Country",
    },
  },

  {
    text: "Arrange the words in a meaningful sequence: Poverty, Population, Death, Unemployment, Disease",
    options: [
      "2, 3, 4, 5, 1",
      "3, 4, 2, 5, 1",
      "2, 4, 1, 5, 3",
      "1, 2, 3, 4, 5",
    ],
    answer: "2, 4, 1, 5, 3",

    passage: {
      1: "Poverty",
      2: "Population",
      3: "Death",
      4: "Unemployment",
      5: "Disease",
    },
  },

],

};

const questions=allQuestions[topic] || []; 

  const [answers, setAnswers] = useState({});
  const [checked, setChecked] = useState(false);

  const handleOptionChange = (questionIndex, option) => {

    setAnswers({
      ...answers,
      [questionIndex]: option,
    });

  };

const handleCheckAnswers = async () => {

  setChecked(true);

  let finalScore = 0;

  questions.forEach((question, index) => {

    if (answers[index] === question.answer) {
      finalScore++;
    }

  });

  try {

    await axios.post(
      "http://localhost:5000/score/save",
      {
        userName: user.name,
        topic,
        score: finalScore,
        total: questions.length,
      }
    );

  } catch (error) {

    console.log(error);

  }

};

  const getOptionClass = (question, option, index) => {

    if (!checked) {
      return "option";
    }

    if (option === question.answer) {
      return "option correct";
    }

    if (
      answers[index] === option &&
      option !== question.answer
    ) {
      return "option wrong";
    }

    return "option";
  };

  let score = 0;

  questions.forEach((question, index) => {

    if (answers[index] === question.answer) {
      score++;
    }

  });

  return (

    <div className="quiz-container">

      <div className="quiz-card">

        <Link to='/topics' className='back-btn'>
            <img
                src={backIcon}
                alt="Back"
                className="back-icon"
            />
        </Link>

        <h1 className="quiz-title">
          {topicMeta[topic] || topic} Quiz
        </h1>

        <div className='questions-grid'>
        {questions.map((question, qIndex) => (

          <div
            key={qIndex}
            className="question-block"
          >

            <h2 className="question-text">
              {qIndex + 1}. {question.text}
            </h2>

            {question.options.map((option, index) => (

              <label
                key={index}
                className={`${getOptionClass(
                    question,
                    option,
                    qIndex
                )} ${
                    answers[qIndex] === option ? "selected" : ""
                }`}
              >

                <div>

                <input
                  type="radio"
                  name={`question-${qIndex}`}
                  value={option}
                  checked={answers[qIndex] === option}
                  disabled={checked}
                  onChange={() =>
                    handleOptionChange(qIndex, option)
                  }
                />

                  <span className="option-text">
                    {option}
                  </span>

                </div>

                {checked &&
                  option === question.answer && (
                  <span className="tick">
                    ✔
                  </span>
                )}

                {checked &&
                  answers[qIndex] === option &&
                  option !== question.answer && (
                  <span className="wrong-tick">
                    ✖
                  </span>
                )}

              </label>

            ))}

          </div>

        ))}
        </div>

        <button
          className="check-btn"
          onClick={handleCheckAnswers}
        >
          Check All Answers
        </button>

        {checked && (

          <div className="score-box">

            Your Score: {score} / {questions.length}

          </div>

        )}

        

      </div>

    </div>
  );
}

export default QuizQues;