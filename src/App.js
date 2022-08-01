
import './App.css';
import NavBar from './Layouts/NavBar/Index';
import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from './Components/Paginas/Box';
import Combos from './Components/Paginas/Combos';
import Contactanos from './Components/Paginas/Contactanos';
import Dulces from './Components/Paginas/Dulces';
import Home from './Components/Paginas/Inicio';
import Nosotros from './Components/Paginas/Nosotros';
import Salados from './Components/Paginas/Salados';
import Tortas from './Components/Paginas/Tortas';
import Inicio from './Components/Paginas/Inicio';
import Cart from './Container/Cart';



function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        
          <Route path='/'element={<Inicio/>}/>
          <Route path='Box'element={<Box/>}/>
          <Route path='Combos'element={<Combos/>}/>
          <Route path='Contactanos'element={<Contactanos/>}/>
          <Route path='Dulces'element={<Dulces/>}/>
          <Route path='Home'element={<Home/>}/>
          <Route path='Nosotros'element={<Nosotros/>}/>
          <Route path='Salados'element={<Salados/>}/>
          <Route path='Tortas'element={<Tortas/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='*' element={ <Navigate replace to="/" /> }/>

      </Routes>      
    </BrowserRouter>
  );
}

export default App;
