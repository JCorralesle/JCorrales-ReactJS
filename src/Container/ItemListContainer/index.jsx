import React, { useState, useEffect } from "react";
import ItemList from '../../Components/ItemList';
import { productosRaw } from '../../mocks/productos';
import './ItemListContainerStyle.css';
import { useParams } from "react-router-dom";

const ItemListContainer = ( {greeting} ) => {


  const [productos, setProductos] = useState ([])
  const{categoryId} = useParams();

  let flag = true;
  const traerProductos = (time, task) => {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        if (flag){
          resolve(task)
        }
        else {reject('Error')}
      }, time)
    })
  }

  useEffect (() =>{ 
    if(categoryId){
      traerProductos(500, productosRaw)
      .then((result) =>(
      setProductos(result.filter(products => products.category === categoryId))
      ))
  }
   else {
    traerProductos(500, productosRaw)
    .then((result) => {
      setProductos(result)
    })
  }
  }, [categoryId])



  return (
    <div className="EstiloItemListContainer">
        <h1> {greeting} </h1>
        <ItemList  products={productos}/>     
    </div>

    
  )
}

export default ItemListContainer
