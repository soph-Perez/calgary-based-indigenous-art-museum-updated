import Quiz from "../components/quiz/Quiz";
import { lifegiverQuestions } from "../quizzes/lifegiverQuiz"; {/*change the path here*/}

function LifeGiverQuiz() {
  return (
    <Quiz
      questions={lifegiverQuestions} 
      title="Life Giver Quiz" 
    />
  );
}

export default LifeGiverQuiz;
