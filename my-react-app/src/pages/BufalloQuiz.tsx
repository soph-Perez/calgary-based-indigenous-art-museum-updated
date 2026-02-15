import Quiz from "../components/quiz/Quiz";
import { bufalloQuestions } from "../quizzes/bufalloQuiz"; {/*change the path here*/}

function BufalloQuiz() {
  return (
    <Quiz
      questions={bufalloQuestions} 
      title="Life Giver Quiz" 
    />
  );
}

export default BufalloQuiz;
