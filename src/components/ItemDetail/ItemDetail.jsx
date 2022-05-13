import React, { useContext } from 'react';
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
                <img src={item.imgUrl} alt="imagen" />
            </div>

            <div className='countContainer'>
                <h3>{item.name}</h3>
                <p>Cant Disponible: {item.stock}</p>
                <div className='optionBuy'>
                    <ItemCount stock={item.stock} initial={1} onAdd={addHandler} />
                    <button onClick={() => console.log(cartTxt.products)}>Ver Carrito</button>
                    <button onClick={() => console.log(cartTxt.isInCart(item.id))} >Is in cart</button>
                    <button onClick={() => cartTxt.removeItem(item.id)} >Eliminar Producto</button>
                    <button onClick={() => cartTxt.clear()} >Limpiar Carrito</button>
                    <div>
                        {cartTxt.products.length &&
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
                <p className='priceProduct'>{item.price}</p>
            </div>
        </div>
    );
}

export default ItemDetail;


