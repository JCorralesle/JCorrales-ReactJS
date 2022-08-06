import React, { useState } from 'react'
import './ItemCount.css';

const ItemCount = ({stock, initial, onAdd}) => {

    const [quantity, SetQuantity] = useState(initial)

    const agregarCantidad = () => {
        if (quantity < stock){
            SetQuantity(quantity + 1)
        }
    }
 
    const disminuirCantidad = () => {
        if (quantity > 1){
            SetQuantity(quantity - 1)
        }
    }

    
    return (
        <div className='EstiloContador'>
            <button className='EstiloBotonItemCount' onClick={agregarCantidad}> + </button> 
            <span>{quantity}</span>
            <button className='EstiloBotonItemCount' onClick={disminuirCantidad}> - </button>
            <br/>
            <button className='EstiloBotonItemCount' onClick={() => onAdd(quantity)} > Agregar al Carrito </button>
        </div>
    )


    
}

export default ItemCount