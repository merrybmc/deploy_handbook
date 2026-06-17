import React, { useState, useEffect } from "react";

export default function QuizCard({ quiz, onComplete }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Reset state when quiz changes
  useEffect(() => {
    setSelectedOption(null);
    setIsSubmitted(false);
    setIsCorrect(false);
  }, [quiz]);

  const handleOptionClick = (index) => {
    if (isSubmitted) return;
    setSelectedOption(index);
  };

  const handleSubmit = () => {
    if (selectedOption === null || isSubmitted) return;

    const correct = selectedOption === quiz.correctIndex;
    setIsCorrect(correct);
    setIsSubmitted(true);

    if (correct && onComplete) {
      onComplete();
    }
  };

  return (
    <div className="quiz-section">
      <div className="quiz-title">
        <span>❓</span> 미니 퀴즈
      </div>
      <div className="quiz-question">{quiz.question}</div>

      <div className="quiz-options">
        {quiz.options.map((option, index) => {
          let optionClass = "quiz-option";
          if (isSubmitted) {
            if (index === quiz.correctIndex) {
              optionClass += " correct";
            } else if (index === selectedOption) {
              optionClass += " incorrect";
            }
          } else if (index === selectedOption) {
            optionClass += " selected";
          }

          return (
            <button
              key={index}
              className={optionClass}
              onClick={() => handleOptionClick(index)}
              disabled={isSubmitted}
            >
              <span className="option-badge">
                {String.fromCharCode(65 + index)}
              </span>
              {option}
            </button>
          );
        })}
      </div>

      {!isSubmitted && (
        <button
          className="nav-btn"
          style={{ width: "100%", justifyContent: "center", backgroundColor: "var(--accent-secondary)", color: "white", borderColor: "transparent" }}
          onClick={handleSubmit}
          disabled={selectedOption === null}
        >
          정답 확인하기
        </button>
      )}

      {isSubmitted && (
        <div className={`quiz-feedback ${isCorrect ? "success" : "error"}`}>
          <div className="feedback-header">
            {isCorrect ? (
              <>
                <span>🎉</span> 정답입니다!
              </>
            ) : (
              <>
                <span>⚠️</span> 오답입니다. 다시 한번 읽어보세요!
              </>
            )}
          </div>
          <div style={{ marginTop: "8px", lineHeight: "1.5" }}>
            <strong>해설:</strong> {quiz.explanation}
          </div>
        </div>
      )}
    </div>
  );
}
