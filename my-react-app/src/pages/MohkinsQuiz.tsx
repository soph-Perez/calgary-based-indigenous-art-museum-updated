import Quiz from "../components/quiz/Quiz";
import { mohkinsQuestions } from "../quizzes/mohkinsQuiz";

function MohkinsQuiz() {
  return (
    <Quiz
      questions={mohkinsQuestions} 
      title="Mohkins Quiz" 
    />
  );
}

export default MohkinsQuiz;