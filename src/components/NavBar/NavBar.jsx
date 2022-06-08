import React from 'react';
import './styleNav.css'
import CartWidget from '../CartWidget/CartWidget';
import Logo from './Logo.png'
import { NavLink, Link } from 'react-router-dom';

function navBar() {
    return (
        <div className='containerHeader'>

            <div>
                <Link to={'/'}><img src={Logo} width={150} alt="logo"/></Link>
            </div>

            <div>
                <h1>Tienda Online</h1>
            </div>

            <ul className='containerList'>
                <li><NavLink to='/category/Pipas' className={nav => nav.isActive ? 'nav-active' : ''}>Pipas</NavLink></li>
                <li><NavLink to='/category/Puros' className={nav => nav.isActive ? 'nav-active' : ''}>Puros</NavLink></li>
                <li><NavLink to='/category/Otros' className={nav => nav.isActive ? 'nav-active' : ''}>Otros</NavLink></li>
            </ul>

            <CartWidget />
        </div>
    );
}

export default navBar;