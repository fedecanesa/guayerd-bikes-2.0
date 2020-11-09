import React from "react";

import URL_BACKEND from "./../../../config";


export default class HomeBanner extends React.Component 
{
    constructor() {
        super();
        this.state = {
            objImg: {}
        }
    }
    
    componentDidMount() {
        const URL_BANNER = `${URL_BACKEND}/getHomeBanner`;
        fetch(URL_BANNER)
        .then((response)=>response.json())
        .then((objImagen)=>{this.setState({objImg: objImagen})});
    }

    render() {
        const { objImg } = this.state;
        return (
            <div className="imagen-principal">
            {
                this.state.objImg.title && (  
                    <a href={objImg.link} target="_blank">
                        <img src={objImg.imgUrl} alt={objImg.title} className="imagen-principal" />
                    </a> 
                )
            }
            </div>
        )
    }
}