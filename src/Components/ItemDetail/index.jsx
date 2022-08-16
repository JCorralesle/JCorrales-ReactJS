import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopData } from '../../context/Shop';
import ItemCount from '../ItemCount';
import './styles.css';


const ItemDetail  = ({productoDetail}) => {

  const {addItem} = useContext(ShopData);

    const [quantity, setQuantity] = useState(0);
    const navigate = useNavigate()

    const onAddCart = (quantity) => {
        console.log("Se agrega al cart la cantidad: ", quantity);
        setQuantity(quantity)
        addItem(productoDetail, quantity)
    }

    const onConfirm = () => {
        navigate('/cart')
    }
 
    if (productoDetail !== null) {
        return (
            <div className='container'>
                <img src={productoDetail.sprites.front_default} alt="portada-pokemon" width='300px' />
                <div className='texts'>
                    <h3>{productoDetail.name}</h3>
                    <p>Tipo: {productoDetail.types[0].type.name}</p>
                    <p>Peso: {productoDetail.weight}</p>
                    {quantity === 0 ?
                        <ItemCount stock={productoDetail.stock} handleAddCart={onAddCart} />
                        :
                        <button onClick={onConfirm}>Terminar mi compra</button>
                    }
                </div>
            </div>
        )
    }
    return (
        <p>Loading...</p>
    )
}

export default ItemDetail;