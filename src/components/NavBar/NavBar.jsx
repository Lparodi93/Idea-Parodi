import React from 'react';
import './styleNav.css'

function navBar(props) {
    return (
        <div className='containerHeader'>

            <div>
                <img src="/assets/logo.png" width={150} alt="" className="logo" />
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
        </div>
    );
}

export default navBar;