import { useContext, useState } from 'react';
import CartItem from './CartItem';
import { CartContext } from '../../Components/Context';
import { Link } from 'react-router-dom';

function Cart () {

  const { cart, clear } = useContext(CartContext);

  const limpiarCarrito = () =>{
    clear();
  }

  if(!cart.length) {
    return (
      <div>
        <h2>No hay productos en el carrito</h2>
        <Link to='/'>Volver a la tienda</Link>
      </div>
    )
  }

  return (
    <div className="App">
      <CartItem cart={cart}></CartItem>
      <button onClick={limpiarCarrito}>Vaciar Carrito</button>
    </div>
  );
 }

 export default Cart;