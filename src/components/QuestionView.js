import { React, useState, useContext, useEffect } from 'react';
import { ImRadioUnchecked, ImRadioChecked } from 'react-icons/im'
import { QuizContext } from '../assets/Contexts';
import { Mathematics, English, Physics, Chemistry, Economics } from '../assets/QuestionBank';

const QuestionView = () => {
    const [selected, setSelected] = useState('');
    const [currentQuestion, setCurrentQuestion] = useState(0);
 
    const selectOption = (chosen) => {
        setSelected(chosen);
    }
    const { gameState, setGameState } = useContext(QuizContext);
    const { score, setScore } = useContext(QuizContext);
    const { timerHours, timerMinutes, timerSeconds, timeLeft } = useContext(QuizContext);
    const { category, setCategory } = useContext(QuizContext);
    const { completed, setCompleted } = useContext(QuizContext);

    let question;
    if (category === "Mathematics") {
         question = Mathematics;
    } else if(category === 'English') {
         question = English;
    } else if(category === 'Physics') {
         question = Physics;
    } else if(category === 'Chemistry') {
         question = Chemistry;
    } else if(category === 'Economics') {
         question = Economics;
    }

    const finishQuiz = () => {
        if (question[currentQuestion].answer===selected) {
            setScore(score + 1);
        }
        setGameState('end');
        setCompleted((prevValue) => [...prevValue, category])
    }
    const nextQuestion = () => {
        if (currentQuestion===5) {
            if (question[currentQuestion].answer===selected) {
                setScore(score + 1);
            }
            setGameState('start');
            setCompleted((prevValue) => [...prevValue, category])
        } else {
            if (question[currentQuestion].answer===selected) {
                setScore(score + 1)
            }
            setSelected('')
            setCurrentQuestion(currentQuestion + 1);
        }      
    }
    useEffect(() => {
        if (timeLeft <= 0) {
            setGameState('end');
        }
    });
    
  return (
    <div>
        <div className='question-card'>
        <div className='question-cat'>
        <h3>{question[currentQuestion].category}</h3>
            {timeLeft >= 0 ? 
            <div className='timer'>{timerHours}:{timerMinutes}:{timerSeconds}</div> :
            <div className='timer'>Time is up!</div>
            }
        </div>
            <h4>Question {currentQuestion + 1}/6</h4>
            <h2>{question[currentQuestion].question}</h2>
            <div className='options'>
                    <div className={selected===question[currentQuestion].options[0] ? 'option selected' : 'option'} onClick={() => selectOption(question[currentQuestion].options[0])}>
                        {selected===question[currentQuestion].options[0] ? <ImRadioChecked /> : <ImRadioUnchecked />}
                        <strong>{question[currentQuestion].options[0]}</strong>
                    </div>
                    <div className={selected===question[currentQuestion].options[1] ? 'option selected' : 'option'} onClick={() => selectOption(question[currentQuestion].options[1])}>
                    {selected===question[currentQuestion].options[1] ? <ImRadioChecked /> : <ImRadioUnchecked />}
                        <strong>{question[currentQuestion].options[1]}</strong>
                    </div>
                    <div className={selected===question[currentQuestion].options[2] ? 'option selected' : 'option'} onClick={() => selectOption(question[currentQuestion].options[2])}>
                    {selected===question[currentQuestion].options[2] ? <ImRadioChecked /> : <ImRadioUnchecked />}
                        <strong>{question[currentQuestion].options[2]}</strong>
                    </div>
                    <div className={selected===question[currentQuestion].options[3] ? 'option selected' : 'option'} onClick={() => selectOption(question[currentQuestion].options[3])}>
                    {selected===question[currentQuestion].options[3] ? <ImRadioChecked /> : <ImRadioUnchecked />}
                        <strong>{question[currentQuestion].options[3]}</strong>
                    </div>
                    <div className='call-to-action'>
                        <button className='previous' onClick={() => setGameState('start')}>Previous</button>
                        { currentQuestion===5 && completed.length>=4 ?
                        <button className='next' onClick={() => finishQuiz()}>End Quiz</button> :
                        <button className='next' onClick={() => nextQuestion()}>{currentQuestion===5 ? <span>Finish Section</span> : <span>Next</span>}</button>}
                    </div>
            </div>
            
        </div>
    </div>
  )
}

export default QuestionView;