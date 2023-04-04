import React from "react"
import { useState } from "react"
import "./Play.css"
import { STATE } from "./constants"
import AnswerRadio from "./AnswerRadio"

export default function Menu({ setAppState, answer, setAnswer, questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)

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

  function handleAnswer(answerOption) {
    setAnswer((ans) => ({
      ...ans,
      [currentQuestion]: { selectedOption: answerOption },
    }))
  }

  function handleResults() {
    setAppState(STATE.RESULTS)
  }

  function showResults() {
    return JSON.stringify(
      Object.keys(answer).reduce((acc, a) => {
        return answer[a].selectedOption.isCorrect ? acc + 1 : acc
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
                questions[currentQuestion].questionText
              }`}
            </p>
          </div>
          <AnswerRadio
            question={questions[currentQuestion]}
            answer={answer}
            handleAnswer={handleAnswer}
            currentQuestion={currentQuestion}
          />
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
            <button
              className="submit-button"
              onClick={handleNext}
              disabled={currentQuestion === questions.length - 1}
            >
              Next
            </button>
          </div>

          <div className="question-counter">
            Question {currentQuestion + 1}/{questions.length}
          </div>
        </div>
        {currentQuestion === questions.length - 1 && (
          <button className="submit-button" onClick={handleResults}>
            See results
          </button>
        )}
        {showResults()}
      </div>
    </div>
  )
}
