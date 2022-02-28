import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import './App.css';
import Nav2 from './componentes/navBar/navBar2';


function App() {
  return (
    <div className="App">
      <Nav2 />
      <ItemListContainer saludo = {"hola soy el saludo!"}/>
    </div>
  );
}
export default App;
