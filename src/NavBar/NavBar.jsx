import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Button, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav"  >
                    <Nav className="mr-auto" style={{textAlign:'right'}}>
                        <NavDropdown title="Client" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/AddClient">Add</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">List</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Product" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/AddProduct">Add</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/AddStock">Enter</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">List</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Sell" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Selling</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Details</NavDropdown.Item>
                            
                        </NavDropdown>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
      
    );
}

export default NavBar;
