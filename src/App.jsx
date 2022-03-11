import React from 'react';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Nav2 from './componentes/navBar/navBar2';
import ItemListContainerMaps from './componentes/ItemListContainerDesafioMaps/ItemListContainerMaps';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBarBoot from './componentes/navBar/navBarBoot';

  //let greeting="hola soy un saludo!!";// -> No funciono asi tampoco

function App() {
  return (
    <div className="App">
      {/* { <Nav2 /> } */}
      {/* <ItemListContainer saludo = {"Hola soy un saludo!!"}/> */}
      {<NavBarBoot/>}
      {<ItemListContainerMaps/>}
    </div>
  );
}
export default App;
