import React from "react";


export default class HomeBanner extends React.Component 
{
    constructor() {
        super();
        this.state = {
            objImg: {}
        }
    }
    
    componentDidMount() {
        /* const RECURSO_BANNER = `${DOMINIO_APP}/getHomeBanner`; */
        const RECURSO_BANNER = `https://guayerd-bikes.herokuapp.com/getHomeBanner`;
        fetch(RECURSO_BANNER)
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