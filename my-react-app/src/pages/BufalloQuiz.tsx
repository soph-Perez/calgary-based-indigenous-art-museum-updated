import Quiz from "../components/quiz/Quiz";
import { bufalloQuestions } from "../quizzes/bufalloQuiz"; {/*change the path here*/}

function BufalloQuiz() {
  return (
    <Quiz
      questions={bufalloQuestions} 
      title="Buffalo Nations Stand and Be Noticed Quiz" 
    />
  );
}

export default BufalloQuiz;
