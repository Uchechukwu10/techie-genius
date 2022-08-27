import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaLightbulb } from 'react-icons/fa'; 
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Category from './Category';
import maths from '../assets/images/maths.png';
import english from '../assets/images/signature.png';
import chemistry from '../assets/images/chemistry.png';
import physics from '../assets/images/electronic-circuit.png';
import economics from '../assets/images/economics.png';

const HomePage = () => {
    const categories = [
        {
            title: 'Mathematics',
            image: maths
        },
        {
            title: 'English',
            image: english
        },
        {
            title: 'Chemistry',
            image: chemistry
        },
        {
            title: 'Physics',
            image: physics
        },
        {
            title: 'Economics',
            image: economics
        }
    ]

    const openQuiz = (title) => {
        console.log(`${title} quiz has been opened`)
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
        <div className='banner' id='banner'>
            <div><h1 className='heading'>Let's Play</h1><p>Do you have what it takes to be in the top 4?</p></div>
            <div className='bulb'><FaLightbulb color='#fff' fontSize='3.3em'/></div>           
        </div>
        <div className='banner-box'>
            <h4>Enter your quiz code here</h4>
            <p>Play with your friends</p>
            <InputGroup className="mb-3 input-card">
                <Form.Control
                className='code-input'
                placeholder="Quiz Code"
                aria-label="code"
                aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                Enter
                </Button>
            </InputGroup>
        </div>
        <h3 className='categories-title'>Quiz Categories</h3>
        <div className='categories'>
        {categories.map((category, index) => {
            return (
            <Category 
            key={index}
            title={category.title}
            image={category.image}
            openQuiz={openQuiz}
            />
            )
        })}
        </div>
    </div>
    
  )
}

export default HomePage;