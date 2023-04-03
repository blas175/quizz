import React, { useState } from "react"
import Menu from "./Menu"
import Play from "./Play"
import { STATE } from "./constants"

export default function App() {
  const [appState, setAppState] = useState(STATE.PLAY)

  return (
    <div className="app">
      {appState === STATE.MENU && <Menu setAppState={setAppState} />}
      {appState === STATE.PLAY && <Play setAppState={setAppState} />}
    </div>
  )
}
