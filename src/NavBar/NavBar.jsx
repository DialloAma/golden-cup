import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav"  >
                    <Nav className="mr-auto" >
                        <NavDropdown title="Client" id="basic-nav-dropdown" style={{marginLeft:'15rem'}}>
                            <NavDropdown.Item as={Link} to="/AddClient">Add</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/ListClient">List</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Product" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/AddProduct">Add</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/ListProduct">List</NavDropdown.Item>
                            
                        </NavDropdown>
                        <NavDropdown title="Stock" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="AddStock">Add</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/ListStock">Enter</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Payement" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="AddPayement">Add</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/ListPayement">Enter</NavDropdown.Item>
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
