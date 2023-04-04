import React from "react"
import "./Menu.css"
import { STATE } from "./constants"

export default function Menu({ setAppState }) {
  function handleClick() {
    setAppState(STATE.PLAY)
  }
  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h1>Quiz Title</h1>
      </div>
      <div className="menu-container">
        <button className="submit-button" onClick={handleClick}>
          Play
        </button>
        <button className="submit-button">Options</button>
        <button className="submit-button">Quit</button>
      </div>
    </div>
  )
}
