import './App.css';
import NavBar from './Layouts/NavBar/Index';
import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from '../src/Container/ItemListContainer';
import ItemDetailContainer from '../src/Container/ItemDetailContainer';
import Cart from './Container/Cart';
import CartProvider from './Components/Context';



function App() {

  return (

    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/'element={<ItemListContainer/>}/>    
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/item/:id'element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='*' element={ <Navigate replace to="/" /> }/>
        </Routes>      
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
