import React from "react"

export default function AnswerRadio({
  question,
  total,
  handleTotal,
  currentQuestion,
}) {
  const answers = [question.correctAnswer, ...question.incorrectAnswers]

  return (
    <div>
      {answers.map((answerOption, index) => {
        return (
          <div className="answer-option" key={index}>
            <input
              type="radio"
              id={`option${index}`}
              name="answers"
              checked={
                total[currentQuestion] != null &&
                total[currentQuestion] === answerOption
              }
              onChange={(e) => handleTotal(answerOption)}
              value={answerOption}
            />
            <label htmlFor={`option${index}`}>
              <span></span>
              <span className="answer-text">{answerOption}</span>
            </label>
          </div>
        )
      })}
    </div>
  )
}
