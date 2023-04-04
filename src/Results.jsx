import React from "react"
import "./Results.css"
import { STATE } from "./constants"

export default function Results({ setAppState, answer, questions, setAnswer }) {
  function showResults() {
    return Object.keys(answer).reduce((acc, a) => {
      return answer[a].selectedOption.isCorrect ? acc + 1 : acc
    }, 0)
  }

  function reset(prams) {
    setAppState(STATE.PLAY)
    setAnswer({})
  }
  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h1>Quiz Title</h1>
        <p>
          {showResults()} / {questions.length}
        </p>
        <button className="submit-button" onClick={reset}>
          Play again
        </button>
      </div>
    </div>
  )
}
