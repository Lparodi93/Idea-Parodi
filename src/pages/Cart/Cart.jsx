import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../Store/CartContext';
import CartItem from '../../components/CartItem/CartItem';
import './cart.css'

function Cart() {
    const cartTxt = useContext(CartContext);
    const {clear} = useContext(CartContext);

    return (
        <div className='compraContainer'>
            {cartTxt.products.map(p => <CartItem item={p} key={p.id} />)}

            {cartTxt.products.length !== 0 ?
                <div className='buttonContainer'>
                    <p>Precio Total: ${(cartTxt.getTotalPrice())}</p>
                    <button onClick={clear}>Vaciar Carrito</button>
                    <Link to='/checkout'>
                        <button>Finalizar Compra</button>
                    </Link>
                </div> :
                <div className='cartFlex'>
                    <h2>No hay Productos en el carrito</h2>
                    <button>
                        <Link to='/'>Volver al Inicio</Link>
                    </button>
                </div>
            }
        </div >
    );
}

export default Cart