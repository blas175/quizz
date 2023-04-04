import React, { useState } from "react"
import Menu from "./Menu"
import Play from "./Play"
import Results from "./Results"
import { STATE } from "./constants"

export default function App() {
  const [appState, setAppState] = useState(STATE.PLAY)

  const [total, setTotal] = useState({})

  return (
    <div className="app">
      {appState === STATE.MENU && <Menu setAppState={setAppState} />}
      {appState === STATE.PLAY && (
        <Play setAppState={setAppState} total={total} setTotal={setTotal} />
      )}
      {appState === STATE.RESULTS && (
        <Results
          setAppState={setAppState}
          answer={total}
          setAnswer={setTotal}
        />
      )}
    </div>
  )
}
