import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Nav2 from './componentes/navBar/navBar2';
import ItemListContainerMaps from './componentes/ItemListContainerDesafioMaps/ItemListContainerMaps';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBarBoot from './componentes/navBar/navBarBoot';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Carrito from './componentes/Carrito/carrito';
import CartContextProvider, { CartContext } from './context/cartContext';



function App() {
  return (
    
    //ESTA MANERA DE CERRAR CARTCONTEXTPROVIDER HACE QUE TODO LO INTERNO SEA CHILDREN
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">

          {<NavBarBoot />}
          <Routes>
            <Route path='/' element={<ItemListContainerMaps />} />
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
            <Route path='/categoria/:categoriaId' element={<ItemListContainerMaps />} />
            <Route path='/carrito' element={<Carrito />} />
            {/* <Route path='/*' element={<Navigate to={'/'} />} /> */}
          </Routes>

        </div>
      </BrowserRouter>
      
    </CartContextProvider>
  );
}
export default App;
