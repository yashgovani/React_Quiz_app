import React, { useState, useContext } from 'react';
import { questionSet } from '../../service/constant';
import './Quiz.css';
import { AuthContext } from '../../context/auth-context';

const Quiz = (props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const user = useContext(AuthContext);

  const handleAnswereOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questionSet.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <center>
      <div className="app">
        {showScore ? (
          <div className="score-section">
            {user.name} scored {score} out of {questionSet.length}
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questionSet.length}
              </div>
              <div className="question-text">
                {questionSet[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questionSet[currentQuestion].answerOptions.map(
                (answerOption) => (
                  <button
                    className="Button"
                    key={answerOption.answerText}
                    onClick={() =>
                      handleAnswereOptionClick(answerOption.isCorrect)
                    }
                  >
                    {answerOption.answerText}
                  </button>
                )
              )}
            </div>
          </>
        )}
      </div>
    </center>
  );
};

export default Quiz;
