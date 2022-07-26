import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
 
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
           <span style={{color:"blue"}}><strong>React</strong></span><span style={{color:"crimson"}}><strong>CrudJson</strong></span>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      
        <Link to="/users/add">
        <button className="btn btn-outline-primary">
          Add User
        </button>
      </Link> 
      </Navbar>
    </>
  );
};

export default Header;
