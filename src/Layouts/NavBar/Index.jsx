import React from 'react';
import CartWidget from '../../Components/CartWidget';
import './NavBar.css';
import { Navbar, Container, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const imagenConstruccion = require.context('../../images/logo');


export default function NavBar(){
 return (
    <>
     <Navbar className="NavBarBG" collapseOnSelect expand="lg" variant="dark">
      <Container>
        <img src={imagenConstruccion(`./3.jpg`)} alt="Logo Dulce Casa" className='logoDulce' />
        <Navbar.Brand as={Link} to="/" > Dulce Casa </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" >Inicio</Nav.Link>
            <Nav.Link as={Link} to="/category/Dulce">Dulces</Nav.Link>
            <Nav.Link as={Link} to="/category/Salado">Salados</Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
      </Navbar>

    </>
 )
}
