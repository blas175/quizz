import React from "react"

export default function AnswerRadio({
  question,
  answer,
  handleAnswer,
  currentQuestion,
}) {
  return (
    <div>
      {question.answerOptions.map((answerOption, index) => {
        return (
          <div className="answer-option" key={index}>
            <input
              type="radio"
              id={`option${index}`}
              name="answers"
              checked={
                answer[currentQuestion] != null &&
                answer[currentQuestion].selectedOption.answerText ===
                  answerOption.answerText
              }
              onChange={(e) => handleAnswer(answerOption)}
              value={answerOption.answerText}
            />
            <label htmlFor={`option${index}`}>
              <span></span>
              <span className="answer-text">{answerOption.answerText}</span>
            </label>
          </div>
        )
      })}
    </div>
  )
}
