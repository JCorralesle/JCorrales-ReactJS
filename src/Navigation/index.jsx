import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from '../Layouts/NavBar';
import ItemDetailContainer from '../Container/ItemDetailContainer';
import ItemListContainer from '../Container/ItemListContainer';
import NotFound from '../Components/NotFound';
import CartContainer from '../Container/CartContainer';
import Checkout from '../Components/Checkout';

const MainNavigator = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:categoryId' element={<ItemListContainer />} />
                <Route path='/item/:id' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<CartContainer />} />
                <Route path='/checkout' element={<Checkout/>} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainNavigator;