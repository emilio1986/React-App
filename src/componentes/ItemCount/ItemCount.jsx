import React , {    useState    } from 'react'
import './itemCount.css';
import './buttons.css'
function ItemCount({stock,inicial,onAdd}){

const [cantidad , serCantidad] = useState(inicial) // USo de hook para poder mantener el estado(cantidad) y setearselo

function dism(){

if (cantidad > 0 ) serCantidad(cantidad - 1)
}


function aument(){

    if (cantidad <  stock ) serCantidad(cantidad-1)
        serCantidad(cantidad + 1)
    }

return(

<div className='itemCount'>
    <button disabled={cantidad ==0} onClick={dism} className ="buttons"> - </button>
    <div className='showProdStock'> {cantidad} </div>
    <button disabled={cantidad ==stock} onClick={aument} className ="buttons"> + </button>
    <button disabled={cantidad ==0} onClick={   ()=> onAdd(cantidad)    } className ="buttonAgregar"> Agregar Producto </button>
    </div>
)


}

export default ItemCount;



