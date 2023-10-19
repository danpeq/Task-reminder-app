import './App.css';
import appleLogo from './imagenes/apple-logo1.png';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='apple-logo-contenedor'>
        <img 
          src={appleLogo} 
          className='apple-logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Task Reminder</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
