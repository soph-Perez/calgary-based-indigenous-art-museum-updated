import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export type Question = {
  question: string;
  options: string[];
  correct: number;
};

interface QuizProps {
  questions: Question[];
  title: string;
}

function Quiz({ questions, title }: QuizProps) {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (index: number) => {
    const isCorrect = index === questions[current].correct;
    

    if (isCorrect) {
      setScore(score + 1);
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true); // quiz is done
    }
  };

  // finished quiz
  if (finished) {
    return (
      <div className="quiz-container">
        <h2 className="quiz-title">{title}</h2>
        <div className="quiz-result">
          <h3>Quiz Finished!</h3>
          <p>Your Score: {score} / {questions.length}</p>
          <button className="primary-button" onClick={() => navigate('/')}>
            Back
          </button>
        </div>
      </div>
    );
  }

  const question = questions[current];

  return (
    <div className="quiz-container">
      <h2 className="quiz-title">{title}</h2>
      <div className="quiz-content">
        <p className="quiz-question">{question.question}</p>
        <div className="quiz-options">
          {question.options.map((opt, i) => (
            <button key={i} className="quiz-option-button" onClick={() => handleAnswer(i)}>
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
