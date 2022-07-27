import React from 'react';
import CartWidget from '../../Components/CartWidget';
import './NavBar.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';



export default function NavBar(){
 return (
    <>
     <Navbar className="NavBarBG" collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" >Dulce Casa</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" >Inicio</Nav.Link>
            <Nav.Link as={Link} to="/Nosotros" >Nosotros</Nav.Link>
            <NavDropdown title="Productos" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/Dulces">Dulces</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Salados">Salados</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/Combos">Combos</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Boxs">Boxs</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/Tortas">Tortas</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/Contactanos"  >Contáctanos</Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
      </Navbar>

      <section>
        <Outlet></Outlet>
      </section>
    </>
 )
}
