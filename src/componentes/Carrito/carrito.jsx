import React from 'react';
import './carrito.css';
import { CartContext, useCartContext } from "../../context/cartContext";

function Carrito() {
    //Seteo el contexto de y me traigo cartList
    const { cartList } = useCartContext(CartContext)

    return (
        <div>

            {
                cartList.map(item =>
                    <li key={item}> {item.item.titulo}
                        <li> {item.item.precio}</li>
                        <li> {item.cantidad}</li>
                    </li>
                )
            }
        </div >
    )

}

export default Carrito;

//.map(item =>  <div> {item.titulo}</div> )
