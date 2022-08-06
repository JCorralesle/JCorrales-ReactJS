import React, {  useState, useEffect } from "react";
import ItemDetail from '../../Components/ItemDetail';
import { useParams } from "react-router-dom";
import { productosRaw } from '../../mocks/productos';


function ItemDetailContainer() {

  const [productos, setProductos] = useState([]);
  const {id} = useParams ();
   
  let flag = true;
  const traerProductosDetalle = (time, task) => {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        if (flag){
          resolve(task)
        }
        else {reject('Error')}
      }, time)
    })
  }

  useEffect (()=> {
    
      
      traerProductosDetalle(500, productosRaw.find (item => item.id === parseInt(id)))
      .then((result) => {
        setProductos(result)
    }).catch(error => {
      alert(`Hubo un error: ${error}`)
    });
    
  },[id])
  

  return (
    <ItemDetail product={productos} />
  );
}


export default ItemDetailContainer