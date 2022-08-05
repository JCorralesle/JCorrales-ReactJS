import React, { useState, useEffect } from "react";
import ItemList from '../../Components/ItemList';
import { productosRaw } from '../../mocks/productos';
import './ItemListContainerStyle.css';
import { useParams } from "react-router-dom";

const ItemListContainer = ( ) => {


  const [productos, setProductos] = useState ([])

  const{categoryId} = useParams();

  useEffect (()=> {
  
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

},[categoryId])


  return (
    <div className="EstiloItemListContainer">
        
        <ItemList  products={productos}/>     
    </div>

    
  )
}

export default ItemListContainer