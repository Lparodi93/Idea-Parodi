import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../Store/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import './styleDetail.css'

const ItemDetail = ({ item }) => {
    const cartTxt = useContext(CartContext);

    function addHandler(quantityToAdd) {
        cartTxt.addItem({ quantity: quantityToAdd, ...item });
    }

    return (
        <div className='itemContainer'>

            <div className='imgContainer'>
                <img src={item.imgUrl} alt="imagen" />
            </div>

            <div className='countContainer'>
                <h3>{item.name}</h3>
                <p>Cant Disponible: {item.stock}</p>
                <p className='priceProduct'>${item.price}</p>
                <div className='optionBuy'>

                    <div>
                        <ItemCount stock={item.stock} initial={1} onAdd={addHandler} />

                        {cartTxt.isInCart(item.id) &&
                            <button>
                                <Link to='/cart'>
                                    Terminar compra ({cartTxt.getCartQuantity()} items)
                                </Link>
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;


