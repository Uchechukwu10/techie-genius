import { React, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ImRadioUnchecked, ImRadioChecked } from 'react-icons/im'

const QuestionView = () => {
    const [selected, setSelected] = useState('');
 
    const selectOption = (chosen) => {
        console.log(`${chosen} has been selected`);
        setSelected(chosen);
    }
    const question = 
        {
            category: 'Mathematics',
            question: 'What angle will the long hand of a wall clock have turned between 3.30pm and 4.10pm?',
            options: ['40°', '240°', '180°', '120°'] 
        }
    
  return (
    <div>
        <div className='nav-full' id='nav'>
            <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home" >Techie Genius</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                {/* <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">About Us</Nav.Link>
                </Nav> */}
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
        <div className='question-card'>
            <h3>{question.category}</h3>
            <h4>Question 1/15</h4>
            <h2>{question.question}</h2>
            <div className='options'>
                    <div className={selected===question.options[0] ? 'option selected' : 'option'} onClick={() => selectOption(question.options[0])}>
                        {selected===question.options[0] ? <ImRadioChecked /> : <ImRadioUnchecked />}
                        <strong>{question.options[0]}</strong>
                    </div>
                    <div className={selected===question.options[1] ? 'option selected' : 'option'} onClick={() => selectOption(question.options[1])}>
                    {selected===question.options[1] ? <ImRadioChecked /> : <ImRadioUnchecked />}
                        <strong>{question.options[1]}</strong>
                    </div>
                    <div className={selected===question.options[2] ? 'option selected' : 'option'} onClick={() => selectOption(question.options[2])}>
                    {selected===question.options[2] ? <ImRadioChecked /> : <ImRadioUnchecked />}
                        <strong>{question.options[2]}</strong>
                    </div>
                    <div className={selected===question.options[3] ? 'option selected' : 'option'} onClick={() => selectOption(question.options[3])}>
                    {selected===question.options[3] ? <ImRadioChecked /> : <ImRadioUnchecked />}
                        <strong>{question.options[3]}</strong>
                    </div>
                    <div className='call-to-action'>
                        <button className='previous'>Previous</button>
                        <button className='next'>Next</button>
                    </div>
            </div>
            
        </div>
    </div>
  )
}

export default QuestionView;