import React from 'react';
import LogoCarrito from './LogoCarrito.png'

function CartWidget(props) {
    return (
        <div>
            <div>
                <a href="#"><img src={LogoCarrito} alt="carrito" width={50} /></a>
            </div>
        </div>
    );
}

export default CartWidget;