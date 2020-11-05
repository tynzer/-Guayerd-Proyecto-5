import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import Contacto from './Contacto';
import Productos from './Productos';

class Header extends Component {
    render() {
        return (
            <div>
                <header className="header">
                <div className="container name-nav-list"><h1 className="main-text">Guayerd Bikes</h1>
                    <nav className="navigation">        
                    <ul>
                        <li><NavLink  to="/">Home </NavLink></li>
                        <li><NavLink  to="/Productos">Productos </NavLink></li>
                        <li><NavLink  to="/Contacto">Contacto </NavLink></li>
                    </ul>   
                    </nav>
                </div>
                </header>
            </div>
        );
    }
}

export default Header;