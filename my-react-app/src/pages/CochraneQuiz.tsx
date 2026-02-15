import Quiz from "../components/quiz/Quiz";
import { cochraneQuestions } from "../quizzes/cochraneQuiz"; 

function CochraneQuiz() {
  return (
    <Quiz
      questions={cochraneQuestions} 
      title="Cochrane Bricolage Quiz" 
    />
  );
}

export default CochraneQuiz;