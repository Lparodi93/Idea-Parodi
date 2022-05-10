import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount'
import './styleDetail.css'

function ItemDetail({ item }) {
    const [cantProd, setCantProd] = useState(null);

    function addHandler(quantityToAdd) {
        setCantProd(quantityToAdd);
    }

    return (
        <div className='itemContainer'>

            <div className='imgContainer'>
                <img src={item.imgUrl} alt="imagen" />
            </div>

            <div className='countContainer'>
                <h3>{item.name}</h3>
                <p>Cant Disponible: {item.stock}</p>
                <div>
                    {cantProd ?
                        <button className='buy'><Link className='styleLink' to='/cart'>{ cantProd ==1 ? `Terminar Compra (${cantProd} Item)` : `Terminar Compra (${cantProd} Items)`}</Link></button> :
                        <ItemCount stock={item.stock} initial={1} onAdd={addHandler} />
                    }
                </div>
                <p className='priceProduct'>{item.price}</p>
            </div>
        </div>
    );
}

export default ItemDetail;


