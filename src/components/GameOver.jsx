import './css/GameOver.css';
import WellDone from "../img/welldone.svg"

import { useContext } from 'react';
import { QuizContext } from '../context/quiz';



const GameOver = () => {
  return (
    <div id="gameover">
        <h2>Fim do jogo!</h2>
        <p>Pontuação: X</p>
        <p>Você acertou Y de Z perguntas.</p>
        <img src={WellDone} alt="Fim do Quiz" />
        <button>Reiniciar</button>
    </div>
  )
}

export default GameOver