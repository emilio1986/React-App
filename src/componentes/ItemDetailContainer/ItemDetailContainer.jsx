
import React, { useEffect, useState } from 'react';
import './ItemDetailContainer.css';
import { stock } from '../../data/stock';
import mostrarStock from '../helpers/MostrarStock';
import ItemDetail from './ItemDetail'


function ItemDetailContainer() {


    const [item, setItem] = useState([]) //Se almacenan los productos   
    const [loading, setLoading] = useState(false) //le paso valor inicial d estado  en false

    useEffect(() => {

        setLoading(true)
        mostrarStock(stock)
            .then((res) => {
                //capturo la respuesta y la seteamos en items
                setItem(res.find((item) => item.id === 1))
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false)   //cambiamos el estado de loading
            })
    }, [])


    return (
        <div className='itemLDetailContainer'>
            {
                loading ?
                    <div className='carga'> Cargando.. Por Favor Espere </div>
                    :
                    <ItemDetail {...item } />        //Destructury
            }
        </div>
    )
}
export default ItemDetailContainer;