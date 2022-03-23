import React from "react";
import './carrito.css';
import imagen from '../../imgs/penguin1.jpg';

function Carrito() {
    return (
        <div className="carrito-className">
            <h1 > BIENVENIDO A SU  CARRITO</h1>

            <img src = {imagen} alt="" />

        </div>
    )

}

export default Carrito;