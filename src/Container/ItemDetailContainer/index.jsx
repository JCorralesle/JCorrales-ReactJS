import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../Components/ItemDetail';
import { doc, getDoc } from "firebase/firestore";
import { database } from '../../firebase/config';

const ItemDetailContainer = () => {

    const [productoDetail, setProductoDetail] = useState(null);

    const {itemId} = useParams();

    console.log(itemId);
    
    useEffect(() => {
        const getProductoDetail = async () => {
            try {
                const docRef = doc(database, "productos", itemId);
                const docSnap = await getDoc(docRef);
                
                if (docSnap.exists()) {
                  console.log(`Document data:, id:${docSnap.id} => data: ${JSON.stringify(docSnap.data())}`);
                  setProductoDetail({id: docSnap.id, ...docSnap.data()})
                } else {
                  console.log("No such document!");
                }

            } catch (error) {
                alert(`Hubo un error: ${error.message}`)
            }
        }
        getProductoDetail();

    }, [itemId])

    return (
        <ItemDetail productoDetail={productoDetail}/>
    )
}

export default ItemDetailContainer