import Quiz from "../components/quiz/Quiz";
import { morninglightQuestions } from "../quizzes/morninglightQuiz";

function MorninglightQuiz() {
  return (
    <Quiz
      questions={morninglightQuestions} 
      title="Morninglight Quiz" 
    />
  );
}

export default MorninglightQuiz;