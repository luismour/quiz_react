//Components
import Welcome from './components/Welcome';
import Question from './components/Question';
import { QuizContext } from './context/quiz';

import { useContext } from 'react';

import './App.css'

function App() {

  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <>
      <div className='App'>
        <h1>Quiz App</h1>
        {quizState.gameStage === "Start" && <Welcome />}
        {quizState.gameStage === "Start" && <Question />}
      </div>
    </>
  )
}

export default App
