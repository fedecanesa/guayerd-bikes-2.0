import React from "react";

export default class Map extends React.Component 
{
    render() {
        return (
            <section className="mapa">
                <h2>Mapa</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.512519874377!2d-58.450068485195644!3d-34.591199364342046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5f12e398ecd%3A0x98abf435fbfab70!2sAv.%20Corrientes%206237%2C%20C1427BPA%20CABA!5e0!3m2!1ses-419!2sar!4v1600547252091!5m2!1ses-419!2sar" width={600} height={450} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0}></iframe>
            </section>
        )
    }
}