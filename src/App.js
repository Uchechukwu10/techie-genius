import {React, useState, useContext, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import QuestionView from './components/QuestionView';
import EndQuiz from './components/EndQuiz';
import { QuizContext } from './assets/Contexts';
import NavBar from './components/NavBar';

function App() {
  const [gameState, setGameState] = useState('start');
  const [score, setScore] = useState(0);
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(2);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timeLeft, setTimeLeft] = useState(120000);
  const [category, setCategory] = useState();
  const [completed, setCompleted] = useState([]);

  let interval;

  const startTimer = () => {
    const future = new Date().getTime();
    const deadline = future + 120000;
    console.log(future);

    interval = setInterval(() => {
      const now = new Date().getTime();
      let distance = deadline - now;
      setTimeLeft(distance);
      const hours = Math.floor(distance / (60*60*1000));
      let rem = distance % (60*60*1000);
      const minutes = Math.floor(rem / (60*1000));
      rem = rem % (60*1000);
      const seconds = Math.floor(rem / 1000);

      if (distance < 0) {
        // Stop Timer

        clearInterval(interval.current);
      } else {
        // Update Timer
        setTimerHours(hours.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}));
        setTimerMinutes(minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}));
        setTimerSeconds(seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}));
      }
    }, 1000);
  };


  
  return (
    <div className="App">
      <NavBar />
      <QuizContext.Provider value={{ gameState, setGameState, score, setScore, timerHours, timerMinutes, timerSeconds, timeLeft, category, setCategory, completed, setCompleted }}>
      {gameState==='start' && <HomePage startTimer={startTimer}/>}
      {gameState==='playing' && <QuestionView />}
      {gameState==='end' && <EndQuiz />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
