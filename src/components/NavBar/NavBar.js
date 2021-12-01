import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'
import './NavBar.css'
import {Container, Nav, Navbar} from "react-bootstrap";

export const NavBar = () => {

    
    return (

    <header className="header">
        <Link to="/"><img src="../../images/logo.jpeg" alt="logo"/></Link>
        <Navbar bg="#F2EBE9" variant="light">
            <Container>
                <Navbar.Brand href="/">ruah velas</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="productos/florales">Velas Florales</Nav.Link>
                    <Nav.Link href="productos/dulces">Velas Dulces</Nav.Link>
                    <Nav.Link hef="productos/combinadas">Velas Combinadas</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>

        
        <Link to="cart"><CartWidget/></Link>
        
    </header>
    )
}


// export default NavBar