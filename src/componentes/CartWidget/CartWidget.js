import React from 'react';
import './CartWidget.css';
import carritoReact from '../../imgs/carritoReact.png';

function CartWidget() {

    return (

        <div className='cartContainer'>
            <img className='cart' src={   carritoReact    } />
        </div>
    );
}

export default CartWidget;