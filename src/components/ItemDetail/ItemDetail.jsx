import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount'
import CartContexts from '../../Store/CartContexts'
import './styleDetail.css'

function ItemDetail({ item }) {
    const cartTxt = useContext(CartContexts);

    function addHandler(quantityToAdd) {
        cartTxt.addItem({ quantity: quantityToAdd, ...item });
    }

    return (
        <div className='itemContainer'>

            <div className='imgContainer'>
                <img src={item.imgUrl} alt="imagen"/>
            </div>

            <div className='countContainer'>
                <h3>{item.name}</h3>
                <p>Cant Disponible: {item.stock}</p>
                <p className='priceProduct'>${item.price}</p>
                <div className='optionBuy'>

                    <div>
                        <ItemCount stock={item.stock} initial={1} onAdd={addHandler} />
                        {cartTxt.isInCart(item.id) &&
                            <button className='buy'>
                                {
                                    <Link className='styleLink' to='/cart'>
                                        Terminar compra ({cartTxt.getCartQuantity()} items)
                                    </Link>
                                }
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;


