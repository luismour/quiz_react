import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./css/Option.css";

const Option = ({ option }) => {
  const [quizState, dispatch] = useContext(QuizContext);

  return <div>
    <p>{option}</p>
  </div>;
};

export default Option;
