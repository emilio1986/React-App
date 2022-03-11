import React from 'react';
import  Item  from './Item';

function ItemList({ items }) {

    return (

        <div className="itemList">
            {
                items.map((item) => <Item  {...item} key={item.id} />)
            }
        </div>
    )
}
export default ItemList