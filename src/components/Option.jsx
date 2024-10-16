import { useContext } from "react";
import PropTypes from "prop-types"; // Importação do PropTypes
import { QuizContext } from "../context/quiz";

import "./css/Option.css";

const Option = ({ option, selectOption, answer, hide }) => {
  const [quizState] = useContext(QuizContext); // Remoção da variável dispatch não utilizada

  return (
    <div
      className={`option ${
        quizState.answerSelected && option === answer ? "correct" : ""
      }
      ${quizState.answerSelected && option !== answer ? "wrong" : ""}
      ${hide ? "hide" : ""}`}
      onClick={() => selectOption()}
    >
      <p>{option}</p>
    </div>
  );
};

// Validação das props com PropTypes
Option.propTypes = {
  option: PropTypes.string.isRequired,
  selectOption: PropTypes.func.isRequired,
  answer: PropTypes.string.isRequired,
  hide: PropTypes.bool.isRequired,
};

export default Option;
