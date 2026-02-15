import Quiz from "../components/quiz/Quiz";
import { cochraneQuestions } from "../quizzes/cochraneQuiz"; {/*change the path here*/}

function CochraneQuiz() {
  return (
    <Quiz
      questions={cochraneQuestions} 
      title="Cochrane Bricolage Quiz" 
    />
  );
}

export default CochraneQuiz;