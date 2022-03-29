import { NavLink } from 'react-router-dom';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from '../../imgs/logo_ne2.jpg';
import '../Carrito/carrito.css';
import carro from '../../imgs/carritoReact.png';
import '../navBar/navBar.css';


function NavBarBoot() {


    return <div>

        <Navbar collapseOnSelect expand="lg"  variant="dark" className='navBarcolor' >
            <Container>
                <NavLink to={'/'}> <img
                    src={logo}
                    width="100"
                    height="100"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                /></NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                        {/* <NavLink to={'/'}>Home </NavLink> */}

                        <NavLink to='categoria/platos'>Platos   </NavLink>
                        <NavLink to='categoria/tazas'> Tazas  </NavLink>
                        <NavDropdown title="Catalogo" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Ofertas</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        {/* <Nav.Link href="#deets">More deets</Nav.Link> */}

                        <NavLink to='carrito' className='carrito-link'>
                            <img src={carro} className='img-Carrito'/>

                                {/* <h2>Carrito</h2> */}
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    </div>




}

export default NavBarBoot