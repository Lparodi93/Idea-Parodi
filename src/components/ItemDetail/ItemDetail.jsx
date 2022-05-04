import React from 'react';
import ItemCount from '../ItemCount/ItemCount'
import './styleDetail.css'

function ItemDetail({ item }) {



    return (
        <div className='itemContainer'>
            <div className='imgContainer'>
                <img src={item.imgUrl} alt="imagen" />
            </div>


            <div className='countContainer'>
                <h3>Pipa Mercure</h3>
                <p>Cant Disponible: {item.stock}</p>
                <ItemCount stock={item.stock} initial={1} onAdd />
                <p className='priceProduct'>{item.price}</p>
            </div>

        </div>
    );
}

export default ItemDetail;


