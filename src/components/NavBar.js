import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <div>
        <div className='nav-full' id='nav'>
            <Navbar expand="lg">
            <div className='nav-container'>
                <Navbar.Brand href="#home" >Techie Genius</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                {/* <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">About Us</Nav.Link>
                </Nav> */}
                </Navbar.Collapse>
            </div>
            </Navbar>
        </div>
    </div>
  )
}

export default NavBar