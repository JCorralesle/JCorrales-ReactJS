
import './App.css';
import NavBar from './Components/NavBar/Index';
import ItemListContainer from './Container/ItemListContainer';

function App() {

  const temp = 20;

  const spanStyles = {
    fontSize: 24,
    margin: 12
  }

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"Hola bienvenidos a Dulce Casa"} />
    </>
  );
}

export default App;