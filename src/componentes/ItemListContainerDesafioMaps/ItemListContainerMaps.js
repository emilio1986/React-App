
import React, { useEffect, useState } from 'react';
import './itemListContainerMaps.css'
import { stock } from '../../data/stock';
import ItemList from './ItemList';
import mostrarArreglo from '../helpers/mostrarArreglo'
import { useParams } from 'react-router-dom';


function ItemListContainerMaps() {


    const [items, setItems] = useState([]) //Se almacenan los productos   
    const [loading, setLoading] = useState(false) //le paso valor inicial d estado  en false
    const { categoriaId } = useParams()

    useEffect(() => {

        setLoading(true)
        mostrarArreglo(stock)
            .then((res) => {
                //capturo la resptuesta y la seteamos en items
                categoriaId?
                setItems(res.filter(    (item) => item.categoria === categoriaId))
                :
                setItems(res)
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false)   //cambiamos el estado de loading
            })
    }, [categoriaId])


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