import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount'
import { CartContext } from '../Context'
import { useContext } from 'react'


const ItemDetail  = ({productoDetail}) => {

  const {addItem} = useContext(CartContext)
  const [producto, setProducto] = useState({})

  const onAdd = (contador) => {
    setProducto(producto)
    addItem(producto, contador)
  }

  if (productoDetail !== null ){

    return (
      <div> 
        
        <h1> {productoDetail.name} </h1>
        <img src={productoDetail.imagen} alt='No hay imagen'></img>
        
        {
          producto.id?
          <div>
            <Link to={'/cart'}><button>Finalizar Compra</button></Link>
          </div>:
          <ItemCount stock={producto.stock} initial={1} onAdd={onAdd}></ItemCount> 
        }
      
      </div>
    )
  }     
    
}

export default ItemDetail 