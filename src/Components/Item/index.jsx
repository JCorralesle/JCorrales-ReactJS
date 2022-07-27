import React from 'react'
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount';

const Item = ({producto}) => {
  return (

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto.imagen} />
      <Card.Body>
        <Card.Title> {producto.name} </Card.Title>
        <Card.Text> {producto.precio} </Card.Text>
      </Card.Body>
      <ItemCount stock={10}/>
    </Card>
    
    
  )
}

export default Item