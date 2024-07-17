import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./css/PickCategory.css";
import Category from "../img/category.svg";

const PickCategory = () => {
  return <div id="category">
    <h2>Escolha uma categoria</h2>
    <p>As perguntas serão referentes a uma das linguagens abaixo:</p>
    <button>CSS</button> 
    <img src={Category} alt="categoria das linguagens" />
  </div>;
};

export default PickCategory;
