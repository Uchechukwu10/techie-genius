import { React, useContext, useEffect } from 'react';
import { FaLightbulb } from 'react-icons/fa'; 
import { QuizContext } from '../assets/Contexts';

const Category = (props) => {
    const { completed } = useContext(QuizContext);

    useEffect(() => {
        if (completed.includes(props.title)) {

        }
    })
  return (
    <div className={completed.includes(props.title) ? 'category completed' : 'category'} onClick={() => {
        props.openQuiz(props.title)
    }}>
        <div className='category-image'>
            <img src={props.image} alt='calculus logo'/>
        </div>
        <div className='category-details'>
            <h2 className='category-title'>{props.title}</h2>
            <div className='category-sub'>
                <div className='cat-icon'>
                    <FaLightbulb />
                </div>
                <div className='question-no'>
                {completed.includes(props.title) ? <span>Completed</span> : <span>Click to start</span>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category;