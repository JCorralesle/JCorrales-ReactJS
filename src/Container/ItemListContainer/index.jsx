import React, { useState, } from "react";
import ItemList from '../../Components/ItemList';
import { productosRaw } from '../../mocks/productos';
import './ItemListContainerStyle.css'


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


  return (
    <div className="EstiloItemListContainer">
        <h1>  {greeting} </h1>
        <ItemList  products={productos}/>     
    </div>

    
  )
}

export default ItemListContainer