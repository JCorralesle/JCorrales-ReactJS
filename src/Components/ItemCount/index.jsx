import React, { useState } from 'react'
import './ItemCount.css';

const ItemCount = ({stock, handleAddCart}) => {
    const [quantity, setQuantity] = useState(1)

    const addQuantity = () => {
        if (quantity < stock){
            setQuantity(quantity + 1)
        }
    }

    const decrementQuantity = () => {
        if (quantity > 1){
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className='EstiloContador' >
            <button className='EstiloBotonItemCount' onClick={addQuantity}>+</button>
            <span>{quantity}</span>
            <button className='EstiloBotonItemCount' onClick={decrementQuantity}>-</button>
            <button className='EstiloBotonItemCount' onClick={()=>handleAddCart(quantity)}>Add cart</button>
        </div>
    )
}

export default ItemCount