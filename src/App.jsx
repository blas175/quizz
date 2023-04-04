import React, { useState } from "react"
import Menu from "./Menu"
import Play from "./Play"
import Results from "./Results"
import { STATE } from "./constants"

export default function App() {
  const [appState, setAppState] = useState(STATE.PLAY)

  const [answer, setAnswer] = useState({})
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ]

  return (
    <div className="app">
      {appState === STATE.MENU && <Menu setAppState={setAppState} />}
      {appState === STATE.PLAY && (
        <Play
          setAppState={setAppState}
          answer={answer}
          setAnswer={setAnswer}
          questions={questions}
        />
      )}
      {appState === STATE.RESULTS && (
        <Results
          setAppState={setAppState}
          answer={answer}
          setAnswer={setAnswer}
          questions={questions}
        />
      )}
    </div>
  )
}
