import { React, useContext } from 'react';
import { QuizContext } from '../assets/Contexts';


const EndQuiz = () => {
  const {gameState, setGameState} = useContext(QuizContext);
  const { score, setScore } = useContext(QuizContext);

  const returnHome = () => {
    setGameState('start');
  }
  return (
    <div>
        <div className='finish-quiz'>
            <div className='end-card'>
                <h3><span>Congratulations!</span> on successful completion of this quiz</h3>
                <p>Your score is <span>{score}</span></p>
            </div>
            <div className='return-btn' onClick={() => returnHome()}>
                Return Home
            </div>
        </div>
    </div>
    
  )
}

export default EndQuiz;