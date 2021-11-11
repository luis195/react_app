import React from 'react';
import {CartWidget} from "../CartWidget/CartWidget";
import {Container, Nav, Navbar} from 'react-bootstrap';
import  './NavBar.css'
import logo from './logo.PNG'

export const NavBar = () => {

    return(

        <header className="header">
            <Navbar bg="light" variant="light">
                <Container>
                    <img src={logo} alt={"pic"}/>
                    <Navbar.Brand href="#home">Candle Cake</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#features">Productos</Nav.Link>
                        <Nav.Link href="#pricing">Promociones</Nav.Link>
                    </Nav>
                    <CartWidget/>
                </Container>
            </Navbar>
        </header>
    )
}
