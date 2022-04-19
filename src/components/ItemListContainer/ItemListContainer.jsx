import React from 'react';
import './styleCart.css'

function ItemListContainer(props) {
    return (
        <div className='containerProduct'>
            <p className='titleProduct' style={{color: props.color}}>{props.greeting}</p>
        </div>
    );
}

export default ItemListContainer;