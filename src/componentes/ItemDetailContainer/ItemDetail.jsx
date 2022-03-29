import React from 'react';
import { stock } from '../../data/stock';

function ItemDetail({ id, titulo, descripcion, precio, img,stock,categoria }) {

    return (

        <div className="ItemDetail">

            <div className="frente">
                <img src={img} alt="Imagen Item" />
                {/* <img src={img} alt="Imagen Item" /> */}
            </div>

            <div className="detalleProd">
                <div className='div-h2s'>
                    <h2>Producto:   {titulo}</h2>
                    <h2>Descripcion:    {descripcion}</h2>
                    <h2>Precio:     {precio}$</h2>
                    <h2>Stock Disponible:   {stock}</h2>
                </div>
            </div>
        </div>

    )
}


export default ItemDetail;