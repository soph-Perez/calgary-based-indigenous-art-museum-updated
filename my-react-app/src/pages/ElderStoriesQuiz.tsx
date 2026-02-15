import Quiz from "../components/quiz/Quiz";
import { elderstoriesQuestions } from "../quizzes/elderstoriesQuiz"; {/*change the path here*/}

function ElderStoriesQuiz() {
  return (
    <Quiz
      questions={elderstoriesQuestions} 
      title="Elder Stories Quiz" 
    />
  );
}

export default ElderStoriesQuiz;
