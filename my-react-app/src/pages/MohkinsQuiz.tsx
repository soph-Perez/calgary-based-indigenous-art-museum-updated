import Quiz from "../components/quiz/Quiz";
import { mohkinsQuestions } from "../quizzes/mohkinsQuiz"; {/*change the path here*/}

function MohkinsQuiz() {
  return (
    <Quiz
      questions={mohkinsQuestions} 
      title="Mohkins Quiz" 
    />
  );
}

export default MohkinsQuiz;