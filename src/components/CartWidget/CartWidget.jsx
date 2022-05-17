import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LogoCarrito from './LogoCarrito.png'
import CartContext from '../../Store/CartContexts'
import Globito from '../Globito/Globito';
import './cartWidget.css'

function CartWidget() {
    const cartCont = useContext(CartContext);

    return (
        <div className='widgetContainer'>
            <div>
                <Link to='/cart'><img src={LogoCarrito} alt="LogoCarrito" width={50} /></Link>
            </div>

            <div className='globoMove'>
                {cartCont.products.length !== 0 &&
                    <div className='containerGlobo'>
                        <Globito>
                            {cartCont.getCartQuantity()}
                        </Globito>
                    </div>
                }
            </div>

        </div>
    );
}

export default CartWidget;