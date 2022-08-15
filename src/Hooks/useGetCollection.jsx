import {useEffect, useState} from 'react'
import { collection, query, getDocs } from "firebase/firestore";
import { database } from '../firebase/config';

const useGetCollection = (categoryId) => {

    const [data, setData] = useState([]);
    const [productosDulceCasa, setProductosDulceCasa] = useState ([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("")

    useEffect(()=> {
        (async()=> {
            try {
                setLoading(true);
                if (productosDulceCasa.length === 0) {
                    const q = query(collection(database, "productos"));
                    const querySnapshot = await getDocs(q);
                    const productos = [];
                    querySnapshot.forEach((doc) => {
                        console.log(doc.id, " => ", doc.data());
                        const producto = {id: doc.id, ...doc.data()}
                        productos.push(producto)
                    });
                    setProductosDulceCasa(productos)
                } else {
                    let productosFiltrados = [...productosDulceCasa]
                    if(categoryId){
                        productosFiltrados = productosDulceCasa.filter(pr => pr.category === categoryId)
                    }
                    setData(productosFiltrados)
                }
                setLoading(false);
            } catch (error){
                setError(error.message);
            }
        })()
    },[categoryId, productosDulceCasa])

    return {
        data,
        error,
        loading
    }
}

export default useGetCollection
