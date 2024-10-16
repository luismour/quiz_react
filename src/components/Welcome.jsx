
import cadeado from '../img/img/cadeado.svg'
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import './css/Welcome.css'

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
        <h2>Seja bem-vindo</h2>
        <p>Clique no botão abaixo para começar:</p>
        <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Iniciar</button>
        <img src={cadeado} alt="cadeado" />
    </div>
  )
}

export default Welcome