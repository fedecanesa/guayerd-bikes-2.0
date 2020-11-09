import React from "react";
import { NavLink } from "react-router-dom";

import "./style"

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
                        <h1 className="animate__animated animate__backInRight">
                            GUAYERD BIKES
                        </h1>
                    </div>
                </NavLink>
                <div className="menu">
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink to="/productos">Productos</NavLink>
                    <NavLink to="/contacto">Contacto</NavLink>
                </div>
            </nav>
        )
    }
}