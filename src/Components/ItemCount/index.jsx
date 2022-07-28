import React, { useState } from 'react'
import './ItemCount.css';

const ItemCount = ({stock}) => {
    const [quantity, SetQuantity] = useState(1)

    const agregarCantidad = () => {
        if (quantity < 100){
            SetQuantity(quantity + 1)
        }
    }

    const disminuirCantidad = () => {
        if (quantity > 1){
            SetQuantity(quantity - 1)
        }
    }

    const handleAddCart = () => {
        alert(`Se agregan ${quantity} productos al carrito`);
    }








    return (
        <div className='EstiloContador'>
            <button className='EstiloBotonItemCount' onClick={agregarCantidad}> + </button> 
            <span>{quantity}</span>
            <button className='EstiloBotonItemCount' onClick={disminuirCantidad}> - </button>
            <br/>
            <button className='EstiloBotonItemCount' onClick={handleAddCart} > Agregar al Carrito </button>
        </div>
    )


    
}

export default ItemCount