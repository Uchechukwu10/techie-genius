import React from 'react';
import { FaLightbulb } from 'react-icons/fa'; 

const Category = (props) => {
  return (
    <div className='category' onClick={() => {
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
                    0/15 Questions
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category;