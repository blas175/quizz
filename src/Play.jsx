import React from "react"
import { useState } from "react"
import "./Play.css"
import { STATE } from "./constants"
import AnswerRadio from "./AnswerRadio"
import useFetch from "./useFetch"

export default function Play({ setAppState, total, setTotal }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const {
    data: questions,
    loading,
    error,
  } = useFetch(
    "https://the-trivia-api.com/api/questions?limit=5&difficulty=medium"
  )

  function handleNext(e) {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((v) => v + 1)
    }
  }
  function handlePrevious(e) {
    if (currentQuestion >= 1) {
      setCurrentQuestion((v) => v - 1)
    }
  }

  function handleTotal(answerOption) {
    setTotal((ans) => ({
      ...ans,
      [currentQuestion]: answerOption,
    }))
  }

  function handleResults() {
    setAppState(STATE.RESULTS)
  }

  function showResults() {
    return JSON.stringify(
      Object.keys(total).reduce((acc, a) => {
        return total[a] === questions[a].correctAnswer ? acc + 1 : acc
      }, 0)
    )
  }

  return (
    <div>
      <div className="quiz-container">
        <div className="quiz-header">
          <h1>Quiz Title</h1>
        </div>

        <div className="question-container">
          <div className="question-text">
            <p>
              {`Question ${currentQuestion + 1}: ${
                questions ? questions[currentQuestion].question : "Loading..."
              }`}
            </p>
          </div>
          {questions && (
            <AnswerRadio
              question={questions[currentQuestion]}
              total={total}
              handleTotal={handleTotal}
              currentQuestion={currentQuestion}
            />
          )}
        </div>
        <div className="bottom-bar">
          <button
            className="submit-button"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            Previous
          </button>
          <div className="buttons">
            {questions && (
              <button
                className="submit-button"
                onClick={handleNext}
                disabled={currentQuestion === questions.length - 1}
              >
                Next
              </button>
            )}
          </div>

          {questions && (
            <div className="question-counter">
              Question {currentQuestion + 1}/{questions.length}
            </div>
          )}
        </div>
        {questions && currentQuestion === questions.length - 1 && (
          <button className="submit-button" onClick={handleResults}>
            See results
          </button>
        )}
      </div>
      {questions && <p>{showResults()}</p>}
    </div>
  )
}
