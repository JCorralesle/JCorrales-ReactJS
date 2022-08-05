import React, {  useState, useEffect } from "react";
import ItemDetail from '../../Components/ItemDetail';
import { useParams } from "react-router-dom";
import { productosRaw } from '../../mocks/productos';


function ItemDetailContainer() {

  const [productos, setProductos] = useState([]);
  const {itemId} = useParams ();
  

  useEffect (() => {

  let detalleDulceCasa = true;
  const traerProductosDulceCasa = (time, task) =>{
   return new Promise((resolve, reject) => {
    setTimeout(()=>{
      if (detalleDulceCasa){ 
      resolve (task)
      }
      else {reject("Error")}
    }, time)
   });
  }

    traerProductosDulceCasa( productosRaw.find (producto => producto.id === parseInt[itemId]))
    .then(result => {
      setProductos(result);
    })
    .catch(error => {
      alert(`Hubo un error: ${error}`);
    });
  },[itemId]);


  //const [productos, setProductos] = useState([]);
  //const {itemId} = useParams ();
  //   console.log(itemId)
  //const traerProductosDulceCasa = new Promise((accept, reject) => {
  //  setTimeout(() => {
  //    accept(productosRaw);
  // });
  //});
  //traerProductosDulceCasa
  //  .then(result => {
  //  setProductos(result);
  //  })
  //  .catch(error => {
  //    alert(`Hubo un error: ${error}`);
  //  });

  return (
    <ItemDetail productos={productos} />
  );
}


export default ItemDetailContainer