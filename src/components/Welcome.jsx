import Quiz from '../img/quiz.svg'

const Welcome = () => {
  return (
    <div>
        <h2>Seja bem-vindo</h2>
        <p>Clique no botão abaixo para começar:</p>
        <img src={Quiz} alt="Inicio do Quiz" />
    </div>
  )
}

export default Welcome