import React from "react"
import "./Results.css"
import { STATE } from "./constants"

export default function Results({ setAppState, total, questions, setTotal }) {
  function showResults() {
    return JSON.stringify(
      Object.keys(total).reduce((acc, a) => {
        return total[a] === questions[a].correctAnswer ? acc + 1 : acc
      }, 0)
    )
  }

  function reset(prams) {
    setAppState(STATE.PLAY)
    setTotal({})
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
