import { NavLink } from 'react-router-dom';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from '../../imgs/logo_ne2.jpg';
import '../Carrito/carrito.css';


function NavBarBoot() {


    return <div>

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
            <Container>
                <Navbar.Brand href="#home"> <img
                    src={logo}
                    width="100"
                    height="100"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                        <NavLink to={'/'}>
                                Home
                        </NavLink>

                        <Nav.Link href="#pricing">Contacto</Nav.Link>
                        <NavDropdown title="Multimedia" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Ofertas</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <NavLink to='carrito' className='carrito-link'>
                            Carrito
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    </div>




}

export default NavBarBoot