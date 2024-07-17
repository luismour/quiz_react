import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./css/PickCategory.css";
import Category from "../img/category.svg";

const PickCategory = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  const chooseCategoryAndReorderQuestions  = (category) => {
    dispatch({type: "START_GAME", payload:category})

    dispatch({type: "REORDER_QUESTIONS"});
  }

  return <div id="category">
    <h2>Escolha uma categoria</h2>
    <p>As perguntas serão referentes a uma das linguagens abaixo:</p>
    <div>{quizState.questions.map((question) => (
      <button onClick={() => chooseCategoryAndReorderQuestions(question.category)} key={question.category}>{question.category}</button>
    ))}</div>
    <img src={Category} alt="categoria das linguagens" />
  </div>;
};

export default PickCategory;
