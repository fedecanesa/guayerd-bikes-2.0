import React from "react";
import { Link } from "react-router-dom";
import Img from "../../img/scarecrow.png";


export default class Error404 extends React.Component{
    render(){
        return(
            <div className="container">
                <h1>404 NOT FOUND</h1>
         
                <section className="main">
                    <div className="image">
                        <img src={Img} alt="Scarecrow" className="img" />
                        </div>
        
                        <div className="content">
                        <h2 className="h2">I have bad news for you</h2>
                        <p className="p">
                            The page you are looking for might be removed or is temporarily unavailable
                        </p>
                        <Link to="/" className="a">Volver a la Home</Link>
                    </div>
                </section>
            </div>
        )
    }
        
    

}