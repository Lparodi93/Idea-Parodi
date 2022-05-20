import React from 'react';
import Item from '../Item/Item'
import './itemList.css'

function ItemList({ data }) {
    return (
        <div className='itemListContainer'>
            {data.map((i) => (<Item item={i} name={i.name} key={i.id} id={i.id} image={i.imgUrl} price={i.price}/>))}
        </div>
    );
}

export default ItemList;
