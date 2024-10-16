
import cadeado from '../img/img/cadeado.svg'
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import './css/Welcome.css'

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome__container">
        <h2>Seja bem-vindo</h2>
        <p>Clique no botão abaixo para começar:</p>
        <img src={cadeado} alt="cadeado" />      
      <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Iniciar</button>
        
    </div>
  )
}

export default Welcome