import React from 'react';
import './NavbarComp.css';
import Container from 'react-bootstrap/Container';
import {Nav, Navbar} from 'react-bootstrap';

export default function NavbarComp() {

    return (
        <Navbar className='nav-color' expand="lg">
          <Container>
            <Navbar.Brand href="" style={{color:"#007486"}}><span className='nav-text'>Amazon</span> NIT Scheduler</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link style={{color:"white"}} href="https://w.amazon.com/bin/view/Recruitment/AWS/LATAM/" target='_blank'>AWS LATAM Wiki</Nav.Link>
                <Nav.Link style={{color:"white"}} href="https://dev.d2c7rff4xfi86w.amplifyapp.com/home" target='_blank'>NIT Tracker</Nav.Link>
                </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>         
      )
}