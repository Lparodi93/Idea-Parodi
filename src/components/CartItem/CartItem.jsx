import React, { useContext } from 'react';
import CartContext from '../../Store/CartContexts';
import Globito from '../Globito/Globito.jsx'
import './cartItem.css'

function CartItem({ item }) {
    const txt = useContext(CartContext);

    return (
        <>
            <div className='listContainer'>

                <div className='productContainer'>
                    <div className='imgContainer'>
                        <img src={item.imgUrl} alt="imagen del producto" width={200} />
                    </div>

                    <p>{item.name}</p>
                    <p>Unidad: ${item.price}</p>
                    <p>Cantidad: {item.quantity} </p>
                </div>

                <div className='container'>
                    <button className='globoButton' onClick={() => txt.removeItem(item.id)}>Eliminar Producto</button>
                </div>
            </div>
        </>
    );
}

export default CartItem