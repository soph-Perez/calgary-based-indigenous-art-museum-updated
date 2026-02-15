import { useParams } from "react-router-dom";
import Quiz from "../components/quiz/Quiz";
import { bufalloQuestions } from "../quizzes/bufalloQuiz";

function QuizPage() {
  const { topic } = useParams();

  let questions;
  let title = "";

  if (topic === "bufallo") {
    questions = bufalloQuestions;
    title = "Bufallo Quiz"; {/*change name*/}
  } else if (topic === "history") {
    questions = historyQuestions;
    title = "History Quiz";
  } else {
    return <div>Quiz not found</div>;
  }

  return <Quiz questions={questions} title={title} />;
}

export default QuizPage;