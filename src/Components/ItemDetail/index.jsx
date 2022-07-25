import React from 'react'


const ItemDetail  = ({pokemonDetail}) => {

    if(pokemonDetail !== null ){
      return (
        <div> 
          <img src= {pokemonDetail.sprites.front_default} alt="Pokemon portada" />
          <p> {pokemonDetail.name} </p>
    
        </div>
      )

    }

    return (
      <p>Loading...</p>
    )

    
}

export default ItemDetail 