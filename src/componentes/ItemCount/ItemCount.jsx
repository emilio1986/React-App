import React, { useState } from 'react'
import './itemCount.css';
import './buttons.css';

function ItemCount({ stock, inicial, onAdd }) {

    const [cantidad, serCantidad] = useState(inicial) // USo de hook para poder mantener el estado(cantidad) y setearselo

    function dism() {

        if (cantidad > 0) serCantidad(cantidad - 1)
    }


    function aument() {

        if (cantidad < stock) serCantidad(cantidad - 1)
        serCantidad(cantidad + 1)
    }

    return (

        <div className='itemCount'>
            <div  className='sumaRestaButtons'>
                <button disabled={cantidad == 0} onClick={dism} className="buttons"> - </button>

             {cantidad}
                <button disabled={cantidad == stock} onClick={aument} className="buttons"> + </button>
            </div>


            {/* ACA ONADD NO ESTA DEFINIDO, SOLO DICE QUE RECIBE UN PARAMETRO, POR LO TANTO CUANDO SE LA LLAME SE SABEQ  RECIBIRA UN PARAM
                PERO NO SE SABE QUE HARA. COMO LO VA A IMPLEMENTAR ITEMDETAIL, ES AHI DONDE SE DEFINE SU COMPORTAMIENTO */}

            <div>
                <button disabled={cantidad == 0} onClick={() => onAdd(cantidad)} className="buttonAgregar"> Agregar Producto </button>
            </div>
        </div>
    )


}

export default ItemCount;



