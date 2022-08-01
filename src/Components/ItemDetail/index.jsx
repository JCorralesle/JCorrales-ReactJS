import React from 'react'
import ItemCount from '../ItemCount'


const ItemDetail  = ({product}) => {

  product.stock = 10;
  const [qtyAdded, setQtyAdded ] = useState(0);

  const handleConfirm = (qty) => {
    setQtyAdded(qty);
  }
    
  const handleTerminate = () => {
    navigate ('/cart')
  }

      return (
        <div> 
          <hi> {product.name} </hi>
          <p> {product.name} </p>
          
          {!qtyAdded ?
            <ItemCount onConfirm={handleConfirm} maxQuantity={product.stock} />
            :
            <button onClick={handleTerminate} >Terminar Compra</button>
          }
        </div>)
     
    
}

export default ItemDetail 