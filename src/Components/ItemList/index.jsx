import React from 'react'
import Item from '../Item'
import './ItemListStyle.css'

const ItemList = ({productos}) => {
  return (
    <div className='EstiloItemList' >
       {productos.map ( producto => {
        return (
          <Item 
            key={producto.id} 
            imagen={producto.imagen}
            precio={producto.precio}
            name={producto.name}
            producto={producto}/>)
    })}
    </div>
  )
}

export default ItemList