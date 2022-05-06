import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Widget from '../Cart/Widget/Widget';
import './NavBar.css';


function NavBar() {
    //console.log(props)
  return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <NavLink to='/' className="navbar-brand">React-Ecommerce</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <NavLink to="/" className="nav-link">Men</NavLink>
                </Nav>
                <Nav>
                    <NavLink to='cart' className="nav-link" > {/* className={ ({ isActive }) => isActive ? 'active' : 'disable'} */}  
                        <Widget />
                    </NavLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    
  )
}

export default NavBar