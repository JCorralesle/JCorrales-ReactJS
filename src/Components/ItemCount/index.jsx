import React, { useState } from 'react'



const ItemCount = ({stock}) => {
    const [quantity, SetQuantity] = useState(1)

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

    const handleAddCart = () => {
        alert(`Se agregan ${quantity} productos al carrito`);
    }








    return (
        <div>
            <button onClick={agregarCantidad}> + </button> 
            <span>{quantity}</span>
            <button onClick={disminuirCantidad}> - </button>
            <br/>
            <button onClick={handleAddCart} > Agregar al Carrito </button>
        </div>
    )


    
}

export default ItemCount