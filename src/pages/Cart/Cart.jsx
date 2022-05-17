import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../Store/CartContexts';
import CartItem from '../../components/CartItem/CartItem'
import './cart.css'

function Cart() {
    const cartTxt = useContext(CartContext);

    return (

        <div className='compraContainer'>
            {cartTxt.products.map(p => <CartItem item={p} key={p.id} />)}
            {cartTxt.products.length !== 0 ?
                <div className='buttonContainer'>
                    <p>Precio Total: ${(cartTxt.getTotalPrice())}</p>
                    <button>Terminar mi compra</button>
                </div> :
                <>
                    <h2>No hay Productos en el carrito</h2>
                    <button>
                        <Link to='/'>Volver al Inicio</Link>
                    </button>
                </>
            }
        </div >
    );
}

export default Cart;