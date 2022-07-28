import React from 'react'
import Item from '../Item'
import './ItemListStyle.css'

const ItemList = ({products}) => {
  return (
    <div className='EstiloItemList' >
       {products.map(producto => {
        return <Item key={producto.id} producto={producto}/>
    })}
    </div>
  )
}

export default ItemList