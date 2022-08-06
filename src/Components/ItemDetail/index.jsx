import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount'
import { CartContext } from '../Context'
import { useContext } from 'react'


const ItemDetail  = ({product}) => {

  const {addItem} = useContext(CartContext)
  const [producto, setProducto] = useState({})

  const onAdd = (contador) => {
    setProducto(product)
    addItem(product, contador)
  }
  return (
    <div> 
      
      <h1> {product.name} </h1>
      <img src={product.imagen} alt='No hay imagen'></img>
      
      {
        producto.id?
        <div>
          <Link to={'/cart'}><button>Finalizar Compra</button></Link>
        </div>:
        <ItemCount stock={product.stock} initial={1} onAdd={onAdd}></ItemCount> 
      }

    </div>)
     
    
}

export default ItemDetail 