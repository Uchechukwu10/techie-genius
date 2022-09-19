import { React, useContext, useEffect } from 'react';
import { QuizContext } from '../assets/Contexts';


const EndQuiz = () => {
  const { setGameState} = useContext(QuizContext);
  const { score } = useContext(QuizContext);
  const { completed, setCompleted } = useContext(QuizContext);
  const { timeLeft, setTimeLeft, setTimerMinutes, setTimerSeconds, setTimerHours } = useContext(QuizContext);
  const { eachScore, setEachScore } = useContext(QuizContext);

  const returnHome = () => {
    setGameState('start');
    setTimeLeft(0);
  }

  useEffect(() => {
      setTimeLeft(0);
      setCompleted(['Mathematics', 'English', 'Physics', 'Chemistry', 'Economics']);
  }, []);

  return (
    <div>
        <div className='finish-quiz'>
            <div className='end-card'>
                <h3><span>Congratulations!</span> on successful completion of this quiz</h3>
                <p>Your total score is <span>{score}</span></p>
                <div className='final-scores'>
                  <div className='score'><span>Mathematics: </span><span>{eachScore.Mathematics}</span></div>
                  <div className='score'><span>English: </span><span>{eachScore.English}</span></div>
                  <div className='score'><span>Chemistry: </span><span>{eachScore.Chemistry}</span></div>
                  <div className='score'><span>Physics: </span><span>{eachScore.Physics}</span></div>
                  <div className='score'><span>Economics: </span><span>{eachScore.Economics}</span></div>
                </div>
            </div>
            <div className='return-btn' onClick={() => returnHome()}>
                Return Home
            </div>
        </div>
    </div>
    
  )
}

export default EndQuiz;