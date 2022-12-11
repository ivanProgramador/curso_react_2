
import './App.css';
import Comentario from './componentes/Comentario'

function App() {
  return (
    <div className="App">
       <h1>Meu projeto</h1>
       <Comentario nome="João" email="joao@mail.com" data={new Date()}>
         Olá, tudo bem ?
       </Comentario>

       <Comentario nome="maria" email="maria@mail.com" data={new Date()}>
         Sim 
       </Comentario>

      
       
    </div>
  );
}

export default App;
