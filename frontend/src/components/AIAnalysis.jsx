import { useState } from "react";
import "./AIAnalysis.css";

const topicLabels = {
  synonyms: "Synonyms",
  antonyms: "Antonyms",
  idioms: "Idioms and Phrases",
  speech: "Change of Speech",
  voice: "Change of Voice",
  oneword: "One Word Substitutes",
  incorrectpart: "Sentence Correction",
  fillblanks: "Fill in the Blanks",
  spelling: "Spelling Correction",
  order: "Order of Sentence",
};

function getScorePercent(score, total) {
  if (!total) return 0;
  return Math.round((score / total) * 100);
}

function ScoreBar({ topic, score, total }) {
  const pct = getScorePercent(score, total);

  const color =
    pct >= 80
      ? "#22c55e"
      : pct >= 50
      ? "#f59e0b"
      : "#ef4444";

  return (
    <div className="score-bar-row">
      <span className="score-bar-label">
        {topicLabels[topic] || topic}
      </span>

      <div className="score-bar-track">
        <div
          className="score-bar-fill"
          style={{
            width: `${pct}%`,
            background: color,
          }}
        />
      </div>

      <span
        className="score-bar-pct"
        style={{ color }}
      >
        {pct}%
      </span>
    </div>
  );
}

export default function AIAnalysis({
  topicScores,
  userName,
}) {
  const [analysis, setAnalysis] =
    useState(null);

  const [open, setOpen] =
    useState(true);

  const hasScores =
    topicScores &&
    topicScores.length > 0;

  const handleGenerate = () => {
    if (!hasScores) return;

    const avgScore =
      topicScores.reduce(
        (sum, t) =>
          sum +
          (t.score / t.total) * 100,
        0
      ) / topicScores.length;

    const strengths =
      topicScores
        .filter(
          (t) =>
            t.score / t.total >= 0.8
        )
        .map(
          (t) =>
            topicLabels[t.topic]
        );

    const weaknesses =
      topicScores
        .filter(
          (t) =>
            t.score / t.total < 0.5
        )
        .map(
          (t) =>
            topicLabels[t.topic]
        );

    setAnalysis({
      overallLevel:
        avgScore >= 80
          ? "Advanced"
          : avgScore >= 50
          ? "Intermediate"
          : "Beginner",

      summary: `You have completed ${
        topicScores.length
      } quiz topics with an average score of ${Math.round(
        avgScore
      )}%. Keep strengthening weak areas while maintaining consistency in strong topics.`,

      strengths:
        strengths.length > 0
          ? strengths
          : ["Basic Understanding"],

      weaknesses:
        weaknesses.length > 0
          ? weaknesses
          : ["None"],

      studyPlan: [
        {
          week: 1,
          focus:
            weaknesses[0] ||
            "Vocabulary",
          action:
            "Practice 20 questions daily and review mistakes carefully.",
        },
        {
          week: 2,
          focus:
            weaknesses[1] ||
            "Grammar",
          action:
            "Attempt topic-wise quizzes and revise concepts.",
        },
        {
          week: 3,
          focus:
            "Mixed Practice",
          action:
            "Take full-length quizzes and analyze performance.",
        },
      ],

      motivationalNote: `Great work ${userName}! Consistent practice will steadily improve your performance and confidence.`,
    });
  };

  const levelColor = {
    Beginner: "#f59e0b",
    Intermediate: "#3b82f6",
    Advanced: "#22c55e",
  };

  return (
    <div className="ai-analysis-section">
      <div
        className="ai-analysis-header"
        onClick={() => setOpen(!open)}
      >
        <div className="ai-analysis-title">
          ✦ Performance Analysis
        </div>

        <span className="ai-chevron">
          {open ? "▲" : "▼"}
        </span>
      </div>

      {open && (
        <div className="ai-analysis-body">
          {hasScores ? (
            <div className="score-bars-wrap">
              <p className="score-bars-label">
                YOUR TOPIC SCORES
              </p>

              {topicScores.map((s) => (
                <ScoreBar
                  key={s.topic}
                  topic={s.topic}
                  score={s.score}
                  total={s.total}
                />
              ))}
            </div>
          ) : (
            <div className="ai-no-scores">
              Complete at least one quiz to view analysis.
            </div>
          )}

          {hasScores && !analysis && (
            <button
              className="ai-generate-btn"
              onClick={handleGenerate}
            >
              Generate Performance Analysis
            </button>
          )}

          {analysis && (
            <div className="ai-result">
              <div className="ai-result-top">
                <span
                  className="ai-level-badge"
                  style={{
                    background:
                      levelColor[
                        analysis.overallLevel
                      ] + "22",
                    color:
                      levelColor[
                        analysis.overallLevel
                      ],
                  }}
                >
                  {analysis.overallLevel}
                </span>

                <p className="ai-summary">
                  {analysis.summary}
                </p>
              </div>

              <div className="ai-sw-grid">
                <div className="ai-sw-box ai-strengths">
                  <div className="ai-sw-title">
                    Strengths
                  </div>

                  <ul>
                    {analysis.strengths.map(
                      (item, i) => (
                        <li key={i}>
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className="ai-sw-box ai-weaknesses">
                  <div className="ai-sw-title">
                    Focus Areas
                  </div>

                  <ul>
                    {analysis.weaknesses.map(
                      (item, i) => (
                        <li key={i}>
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>

              <div className="ai-plan">
                <div className="ai-plan-title">
                  3 Week Study Plan
                </div>

                <div className="ai-plan-weeks">
                  {analysis.studyPlan.map(
                    (week) => (
                      <div
                        key={week.week}
                        className="ai-plan-week"
                      >
                        <div className="ai-week-num">
                          Week {week.week}
                        </div>

                        <div className="ai-week-focus">
                          {week.focus}
                        </div>

                        <div className="ai-week-action">
                          {week.action}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="ai-motivation">
                {analysis.motivationalNote}
              </div>

              <button
                className="ai-regen-btn"
                onClick={handleGenerate}
              >
                Regenerate Analysis
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}