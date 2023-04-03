import React from "react"
import "./Menu.css"
import { STATE } from "./constants"

export default function Menu({ setAppState }) {
  function handleClick() {
    setAppState(STATE.PLAY)
  }
  return (
    <div className="menu-container">
      <button onClick={handleClick}>Play</button>
      <button>Options</button>
      <button>Quit</button>
    </div>
  )
}
