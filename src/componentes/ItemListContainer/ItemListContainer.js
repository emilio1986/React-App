import React from 'react';
import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';




function ItemListContainer (  {saludo} ) {


    const onAdd = (cantidad) => {console.log(`Se han agregado ${cantidad} productos al carrito`)
    }

    return (
        <div  className='itemListCont'>
                {   saludo   }
                <ItemCount stock={6} inicial={1} onAdd={onAdd} />
        </div>
    )
}
export default ItemListContainer;