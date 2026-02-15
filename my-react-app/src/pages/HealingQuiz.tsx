import Quiz from "../components/quiz/Quiz";
import { healingQuestions } from "../quizzes/healingQuiz"; {/*change the path here*/}

function HealingQuiz() {
  return (
    <Quiz
      questions={healingQuestions} 
      title="Healing Quiz" 
    />
  );
}

export default HealingQuiz;