import React, { useState, navigate } from 'react'
import ItemCount from '../ItemCount'


const ItemDetail  = ({productos}) => {

  
  const [qtyAdded, setQtyAdded ] = useState(0);

  const handleConfirm = (qty) => {
    setQtyAdded(qty);
  }
    
  const handleTerminate = () => {
    navigate ('/cart')
  }

  return (
    <div> 
      
      <hi> {productos.name} </hi>
      <p> {productos.category} </p>
      
      {!qtyAdded ?
        <ItemCount onConfirm={handleConfirm} maxQuantity={productos.stock} />
        :
        <button onClick={handleTerminate} >Terminar Compra</button>
      }
    </div>)
     
    
}

export default ItemDetail 