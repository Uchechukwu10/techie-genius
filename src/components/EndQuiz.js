import { React, useContext } from 'react';
import { QuizContext } from '../assets/Contexts';


const EndQuiz = () => {
  const { setGameState} = useContext(QuizContext);
  const { score } = useContext(QuizContext);
  const { completed, setCompleted } = useContext(QuizContext);
  const { timeLeft, setTimeLeft } = useContext(QuizContext);

  // setCompleted(['Mathematics', 'English', 'Physics', 'Chemistry', 'Economics']);

  const returnHome = () => {
    setTimeLeft(0);
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