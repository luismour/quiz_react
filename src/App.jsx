//Components
import Welcome from './components/Welcome';
import Question from './components/Question';
import GameOver from './components/GameOver';
import PickCategory from './components/PickCategory';

import { QuizContext } from './context/quiz';
import { useContext, useEffect } from 'react';

import './App.css'

function App() {

  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    dispatch({type: "REORDER_QUESTIONS"});
  }, []);
    
  return (
    <>
      <div className='App'>
        <h1>Quiz App</h1>
        {quizState.gameStage === "Start" && <Welcome />}
        {quizState.gameStage === "Category" && <PickCategory />}   
        {quizState.gameStage === "Playing" && <Question />}        
        {quizState.gameStage === "End" && <GameOver />}        

      </div>
    </>
  )
}

export default App
