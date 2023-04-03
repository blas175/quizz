import React from "react"
import { useState } from "react"
import "./Play.css"
import { STATE } from "./constants"

export default function Menu({ setAppState }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)

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
  const [answers, setAnswers] = useState(Array(questions.length).fill(1))

  function handleAnswer(e) {
    console.log(parseInt(e.target.value))
    setAnswers((a) => {
      a[currentQuestion] = parseInt(e.target.value)
      return a
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(answers)
    console.log(answers[currentQuestion] === 2)
    // if (currentQuestion < questions.length - 1) {
    //   setCurrentQuestion((v) => v + 1)
    // }
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
              Question {currentQuestion + 1}:{" "}
              {questions[currentQuestion].questionText}
            </p>
          </div>
          {questions[currentQuestion].answerOptions.map(
            (answerOption, index) => {
              return (
                <div className="answer-option" key={index}>
                  <input
                    type="radio"
                    id={`option${index}`}
                    name="q1"
                    onChange={handleAnswer}
                    value={index}
                    checked={answers[currentQuestion] === index}
                  />
                  <label htmlFor={`option${index}`}>
                    <span></span>
                    <span className="answer-text">
                      {answers[currentQuestion]}
                      {answerOption.answerText}
                    </span>
                  </label>
                </div>
              )
            }
          )}
        </div>
        <div className="bottom-bar">
          <button className="submit-button" onClick={handleSubmit}>
            {currentQuestion < questions.length - 1
              ? "Next question"
              : "See Results"}
          </button>
          <div className="question-counter">
            Question {currentQuestion + 1}/{questions.length}
          </div>
        </div>
      </div>
    </div>
  )
}
