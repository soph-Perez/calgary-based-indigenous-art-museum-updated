import Quiz from "../components/quiz/Quiz";
import { healingQuestions } from "../quizzes/healingQuiz"; 

function HealingQuiz() {
  return (
    <Quiz
      questions={healingQuestions} 
      title="Healing Quiz" 
    />
  );
}

export default HealingQuiz;