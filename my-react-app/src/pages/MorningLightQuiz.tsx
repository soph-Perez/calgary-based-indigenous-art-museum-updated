import Quiz from "../components/quiz/Quiz";
import { morninglightQuestions } from "../quizzes/morninglightQuiz"; {/*change the path here*/}

function MorninglightQuiz() {
  return (
    <Quiz
      questions={morninglightQuestions} 
      title="Morninglight Quiz" 
    />
  );
}

export default MorninglightQuiz;