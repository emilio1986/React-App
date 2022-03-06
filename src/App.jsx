import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import './App.css';
import Nav2 from './componentes/navBar/navBar2';
import ItemListContainerMaps from './componentes/ItemListContainerDesafioMaps/ItemListContainerMaps';

  //let greeting="hola soy un saludo!!";// -> No funciono asi tampoco

function App() {
  return (
    <div className="App">
      {/* <Nav2 /> */}
      {/* <ItemListContainer saludo = {"Hola soy un saludo!!"}/> */}
      {<ItemListContainerMaps/>}
    </div>
  );
}
export default App;
