import React from "react";
import ItemList from '../../Components/ItemList';
import './ItemListContainerStyle.css';
import { useParams } from "react-router-dom";
import useGetCollection from '../../Hooks/useGetCollection'


const ItemListContainer = ( {greeting} ) => {

  const {categoryId} = useParams();
  const {data, error, loading} = useGetCollection(categoryId);

  console.log(error);

  return (
    loading ?
    <h4>Loading</h4>

    :
    <ItemList productos={data}/>
  
  )

}

export default ItemListContainer

