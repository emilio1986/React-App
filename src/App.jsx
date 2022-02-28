import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import './App.css';
import Nav2 from './componentes/navBar/navBar2';

  //let greeting="hola soy un saludo!!";// -> No funciono asi tampoco

function App() {
  return (
    <div className="App">
      <Nav2 />
      <ItemListContainer saludo = {"Hola soy un saludo!!"}/>
    </div>
  );
}
export default App;
