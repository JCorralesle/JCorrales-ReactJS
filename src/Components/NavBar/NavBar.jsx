import React from 'react';
import './NavBar.css';
export default function NavBar(){
 return (
    
      <ul>
        <li><a class="active" href="#home">Inicio</a></li>
        <li><a href="#news">Dulces</a></li>
        <li><a href="#contact">Salados</a></li>
        <li><a href="#about">Tortas</a></li>
      </ul>
 )
}