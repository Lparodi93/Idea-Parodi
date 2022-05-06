import React from 'react';
import './styleNav.css'
import CartWidget from '../CartWidget/CartWidget';
import Logo from './Logo.png'
import { NavLink, Link } from 'react-router-dom';

function navBar(props) {
    return (
        <div className='containerHeader'>

            <div>
                <Link to={'/'}><img src={Logo} width={150} alt="logo"/></Link>
            </div>

            <div>
                <h1>Fenix Tabaco</h1>
            </div>

            <ul className='containerList'>
                <li><NavLink to='/category/Pipas' className={nav => nav.isActive ? 'nav-active' : ''}>Pipas</NavLink></li>
                <li><NavLink to='/category/Tabaco' className={nav => nav.isActive ? 'nav-active' : ''}>Tabaco</NavLink></li>
                <li><NavLink to='/category/Encendedores' className={nav => nav.isActive ? 'nav-active' : ''}>Encendedores</NavLink></li>
            </ul>

            <CartWidget />
        </div>
    );
}

export default navBar;