import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopData } from '../../context/Shop';
import CartWidget from '../../Components/CartWidget';
import SelectDarkMode from '../../Components/SelectDarkMode';
import './NavBar.css';

export default function NavBar(){

  const {darkMode} = useContext(ShopData);

 return (

        <ul style={{backgroundColor: darkMode ? '#333': 'beige'}}>
            <li><Link to="/" style={{color: darkMode ? 'white': 'black'}}>Home</Link></li>
            <li><Link to="/category/Dulce" style={{color: darkMode ? 'white': 'black'}}>Productos Dulces </Link></li>
            <li><Link to="/category/Salado" style={{color: darkMode ? 'white': 'black'}}>Productos Salados </Link></li>
            <CartWidget />
            <SelectDarkMode/>
        </ul>

 )
}
