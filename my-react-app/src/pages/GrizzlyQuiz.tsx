import Quiz from "../components/quiz/Quiz";
import { grizzlyQuestions } from "../quizzes/grizzlyQuiz"; {/*change the path here*/}

function GrizzlyQuiz() {
  return (
    <Quiz
      questions={grizzlyQuestions} 
      title="Grizzly Quiz" 
    />
  );
}

export default GrizzlyQuiz;