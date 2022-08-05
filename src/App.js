import './App.css';
import NavBar from './Layouts/NavBar/Index';
import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from '../src/Container/ItemListContainer';
import ItemDetailContainer from '../src/Container/ItemDetailContainer';
import Contactanos from './Components/Paginas/Contactanos';
import Home from './Components/Paginas/Inicio';
import Nosotros from './Components/Paginas/Nosotros';
import Inicio from './Components/Paginas/Inicio';
import Cart from './Container/Cart';



function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path='/'element={<Inicio/>}/>
          <Route path='Home'element={<Home/>}/>
          <Route path='Nosotros'element={<Nosotros/>}/>

          <Route path='Todos'element={<ItemListContainer/>}/>    
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
 
          <Route path='/item/:itemId'element={<ItemDetailContainer/>}/>

          <Route path='Contactanos'element={<Contactanos/>}/>

          <Route path='/cart' element={<Cart/>}/>
          <Route path='*' element={ <Navigate replace to="/" /> }/>

      </Routes>      
    </BrowserRouter>
  );
}

export default App;
