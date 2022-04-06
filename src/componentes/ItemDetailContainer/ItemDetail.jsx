import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';


function ItemDetail({ id, titulo, descripcion, precio, img, stock }) {

    const [count, setCount] = useState(null)

    //cantidad es del componente (ItemCount). Viene para aca por medio de  <ItemCount/> y su trigger del evento click de agregar Prod, con (cantidad)
    //aca se "redefine para capturar esa cantidad y poder trabajar con ella con setCount para decidir que mostrar"
    function onAdd(cantidad) {

        console.log(cantidad);
        setCount(cantidad);
    }

    return (

        <div className="ItemDetail">

            <div className="frente">
                <img src={img} alt="Imagen Item" className='img-Item-Detail' />
                {/* <img src={img} alt="Imagen Item" /> */}
            </div>

            <div className="detalleProd">
                <div className='div-h2s'>
                    <h2>Producto:   {titulo}</h2>
                    <h2>Descripcion:    {descripcion}</h2>
                    <h2>Precio:     {precio}$</h2>
                    <h2>Stock Disponible:   {stock}</h2>
                </div>
                {
                // SI onAdd se dispara con un valor valido,-> (Agregar Al Carrito-Click), al SETEARSE Count con cantidad(onAddLocal),
                //APARECE EL LINK AL CARRITO,
                count  ?

                    <Link to={'/carrito'}>
                        <button className='btn btn-outline-primary'>Ir al Carrito
                        </button>
                    </Link>
                // si no trae valor  definido( NUNCA  va a ser 0 por el condicional del disabled del botton),  Renderiza  EL ITEMCOUNT
                    :
                    <ItemCount stock={stock} inicial={1} onAdd={onAdd} />
            }
            </div>

           
        </div>

    )
}


export default ItemDetail;