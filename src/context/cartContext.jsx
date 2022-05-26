import React from 'react';
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import actualizarItem from "../../src/componentes/helpers/actualizarItem";


export const CartContext = createContext([])

//funcion generica para ser llamada desde un componente y que ya este usando el contexto
//pasado como parametro
export const useCartContext = () => useContext(CartContext)


//funcion para comprobar items duplicados y no repetirlos en el carrito
function duplicado(array, item) {

    if (array && item != null) {

        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            if (element.id === item.id) {
                return true;
            }
            else {
                return false;
            }
        }

    }
}




//COMPONENTE QUE CREA UN CONTEXTO->cartContext y tiene una fn-> cartContextProvider()
//que maneja un estado con el cartList para ser uytilizado desde el cart

function CartContextProvider({ children }) {

    const [cartList, setCartList] = useState([])



    const agregarAlCarrito = (item, cantidad) => {

        //agrego un nuevo item para q se actualice el cartList


        if (!duplicado(cartList, item)) setCartList([...cartList, item])


        else {

            actualizarItem(cartList, item);
            setCartList([...cartList]);
            //console.log("CHUPALA");

        }

    }
    return (
        //Le paso con coma 2 cosas , una funcion y el cartList
        <CartContext.Provider value={{
            cartList,
            agregarAlCarrito
        }}>
            {children}

        </CartContext.Provider>
    )

}


export default CartContextProvider;