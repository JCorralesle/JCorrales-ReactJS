import React, { useState } from "react";
import ItemCount from '../../Components/ItemCount'
import ItemList from '../../Components/ItemList'
import { productosRaw } from '../../mocks/productos'

const ItemListContainer = ({greeting} ) => {

  const [productos, setProductos] = useState ([])

  const traerProductos = new Promise ((accept, reject ) => {
    setTimeout (() => {
      accept (productosRaw)
    })
  })

  traerProductos
  .then(result => {
    setProductos(result)
  })
  .catch(error => {
    alert(`Hubo un error: ${error}`)
  })

  console.log(productos);

  return (
    <div>
        <h1> {greeting} </h1>
        <ItemCount stock={10} />
        <ItemList products={productos}/>
    </div>
  )
}

export default ItemListContainer