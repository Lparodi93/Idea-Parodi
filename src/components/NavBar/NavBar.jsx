import React from 'react';
import  './styleNav.css'
import CartWidget from '../CartWidget/CartWidget';
import Logo from './Logo.png'

function navBar(props) {
    return (
        <div className='containerHeader'>

            <div>
                <a href="#"><img src={Logo} width={150} alt="logo"/></a>
            </div>

            <div>
                <h1>Fenix Tabaco</h1>
            </div>

            <ul className='containerList'>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Contacto</a></li>
                <li><a href="#">Consejos</a></li>
            </ul>

            <CartWidget/>
        </div>
    );
}

export default navBar;