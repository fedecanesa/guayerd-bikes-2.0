import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "./../../img/LOGO.png"

export default class NavBar extends React.Component 
{
    animar = ()=>{
        const LOGO = document.querySelector('img.imgLogo');
        LOGO.classList.toggle("animar");
    }

    /* setInterval(animar, "5000"); */

    render() {
        return (
            <nav>
                <NavLink exact to="/">
                    <div className="navTitle">
                        <img className="imgLogo spin animar" src={Logo} alt="Logo Guayerd" />
                        <h1 className="ml15">
                            <span className="word">Guayerd</span>
                            <span className="word">Bikes</span>
                        </h1>
                    </div>
                </NavLink>
                <div class="menu">
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink to="/productos">Productos</NavLink>
                    <NavLink to="/contacto">Contacto</NavLink>
                </div>
            </nav>
        )
    }
}