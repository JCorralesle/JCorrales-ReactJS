import React from 'react'
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount';
import '../Item/ItemStyle.css';
import { useNavigate } from 'react-router-dom';

const Item = ({producto}) => {

  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/Item/${id}`)

  }

  return (
    <div className='EstiloItem' onClick={ () => handleNavigate(producto.id)}>

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