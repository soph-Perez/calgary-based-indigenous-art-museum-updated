import Quiz from "../components/quiz/Quiz";
import { elderstoriesQuestions } from "../quizzes/elderstoriesQuiz";

function ElderStoriesQuiz() {
  return (
    <Quiz
      questions={elderstoriesQuestions} 
      title="Elder Stories Quiz" 
    />
  );
}

export default ElderStoriesQuiz;