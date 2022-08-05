import React from 'react';
import CartWidget from '../../Components/CartWidget';
import './NavBar.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
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
            <Nav.Link as={Link} to="/Nosotros" >Nosotros</Nav.Link>
            <NavDropdown title="Productos" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/Todos">Todos</NavDropdown.Item>
              <NavDropdown.Divider /> 
              <NavDropdown.Item as={Link} to="/category/Dulces">Dulces</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/Salados">Salados</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/category/Combos">Combos</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/Boxs">Boxs</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/category/Tortas">Tortas</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/Contactanos"  >Contáctanos</Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
      </Navbar>

    </>
 )
}
