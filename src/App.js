import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Inicio from './components/Inicio';
import Cabecera from './components/Cabecera';
import Subir from './components/Subir';
import Contacto from './components/Contacto';


function App() {
  return (
    <div className="column">
      <Cabecera/>
        <div>
          <Inicio/>
          <Subir/>
          <Contacto/>
        </div>
       
    </div>
  );
}

export default App;
