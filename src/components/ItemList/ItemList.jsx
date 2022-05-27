import React from 'react';
import Item from '../Item/Item'
import './itemList.css'

function ItemList({ data }) {
    return (
        <div className='itemListContainer'>
            {data.map(i => <Item item={i} key={i.id}/>)}
        </div>
    );
}

export default ItemList;
