
import './App.css';
import NavBar from './components/NavBar';

function App() {

  const temp = 20;

  const spanStyles = {
    fontSize: 24,
    margin: 12
  }

  return (
    <>
      <NavBar/>
      <div className="container">
      <button 
      style={{
        width: 200,
        borderRadius: 10,
        backgroundColor: 'green'
      }}
      >Presiones aqui</button>
      {/*Elementos autocloseables*/}
      <input className="app-input"  placeholder = "Ingrese su edad"/>
      <hr/>
      <img className="imagen" src="https://t2.rg.ltmcdn.com/es/posts/2/4/2/capuchino_16242_600.jpg" alt="Capuchino" />
      <hr/>
      <img className="imagen" src={'/assets/3.jpg'} alt="Dulce Casa"/>
      <span style={spanStyles} >Valor de la variable tempreatura es: {temp} </span>
      </div> 
    </>
  );
}

export default App;