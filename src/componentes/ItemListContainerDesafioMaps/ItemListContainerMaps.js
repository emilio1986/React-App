
import React, { useEffect, useState } from 'react';
import './itemListContainerMaps.css'
import { stock } from '../../data/stock';
import ItemList from './ItemList';
import mostrarArreglo from '../helpers/mostrarArreglo'


function ItemListContainerMaps() {


    const [items, setItems] = useState([]) //Se almacenan los productos   
    const [loading, setLoading] = useState(false) //le paso valor inicial d estado  en false

    useEffect(() => {

        setLoading(true)
        mostrarArreglo(stock)
            .then((res) => {
                //capturo la resptuesta y la seteamos en items
                setItems(res)
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false)   //cambiamos el estado de loading
            })
    }, [])


    return (
        <div className='itemListContMaps'>
            {
                loading?
                    <div className='carga'> Cargando.. Por Favor Espere </div>
                    :
                    <ItemList items={items} />
            }
        </div>
    )
}
export default ItemListContainerMaps;