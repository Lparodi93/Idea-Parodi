import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './styleCart.css'

function ItemListContainer(props) {
    return (
        <div className='containerProduct'>
            <p className='titleProduct' style={{color: props.color}}>{props.greeting}</p>
            <ItemCount stock={5} initial={1} onAdd={1}/>
        </div>
        
    );
}

export default ItemListContainer;