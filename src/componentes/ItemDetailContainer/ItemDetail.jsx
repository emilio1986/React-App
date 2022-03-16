import React from 'react';
import cuencos from '../../imgs/cuencos_azules.jpg';

function ItemDetail({ id, titulo, descripcion, precio, img }) {

    return (

        <div className="ItemDetail">

            <div className="frente">
                <img src={img} alt="Imagen Item" />
                {/* <img src={img} alt="Imagen Item" /> */}
            </div>

            <div className="detalleProd">
                <h2>{titulo}</h2>
                <h2>{descripcion}</h2>
                <h2>{precio}</h2>
              
            </div>
        </div>

    )
}


export default ItemDetail;