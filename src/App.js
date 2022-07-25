
import './App.css';
import NavBar from './Components/NavBar/Index';
import ItemDetailContainer from './Container/ItemDetailContainer';
import ItemListContainer from './Container/ItemListContainer';

function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"Hola bienvenidos a Dulce Casa"} />
      <ItemDetailContainer/>
    </>
  );
}

export default App;
