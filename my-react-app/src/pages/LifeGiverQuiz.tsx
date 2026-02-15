import Quiz from "../components/quiz/Quiz";
import { LifeGiverQuestions } from "../quizzes/lifegiverQuiz"; {/*change the path here*/}

function LifeGiverQuiz() {
  return (
    <Quiz
      questions={lifegiverQuestions} 
      title="Life Giver Quiz" 
    />
  );
}

export default LifeGiverQuiz;
