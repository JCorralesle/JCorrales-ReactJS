import React from 'react'
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount';
import '../Item/ItemStyle.css'

const Item = ({producto}) => {
  return (
    <div className='EstiloItem'>

      <Card className='EstiloCard'>
        <Card.Img className='EstiloImagen' variant="top" src={producto.imagen} />
        <Card.Body>
          <Card.Title> {producto.name} </Card.Title>
          <Card.Text> Precio: S/. {producto.precio} </Card.Text>
        </Card.Body>
        <ItemCount />
      </Card>

    </div>
    
    
  )
}

export default Item