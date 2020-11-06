import React from "react";


export default class ContactForm extends React.Component 
{
    constructor(){
        super();
        this.state= {
            nombre: "",
            email: "",
            telefono: "",
            tema: "",
            mensaje: ""
        }
    }

    handlerSubmit = (event) =>{
        event.preventDefault()
        console.log(this.state)
    }

    handlerChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })  
    }
    

    render() {
        return (
            <section className="contacto">
                <h2>Contacto</h2>
                <form action="#" method="POST" className="formulario" onSubmit={this.handlerSubmit}>
                    {/* <input type="hidden" name="grupo" defaultValue="e" /> */}
                    
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" name="nombre" id="nombre" placeholder="Ingresa tu nombre" onChange={this.handlerChange} />
                    
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" placeholder="Ingresa tu Email (Ej: contacto@guayerd.com)" onChange={this.handlerChange} />
                    
                    <label htmlFor="nombre">Telefono</label>
                    <input type="text" name="telefono" id="telefono" placeholder="Ingresa tu telefono" onChange={this.handlerChange}/>
                    
                    <label htmlFor="tema">Tema</label>
                    <select name="tema" id="tema" onChange={this.handlerChange}>
                        <option defaultValue="-" disabled>-</option>
                        <option defaultValue="consulta">Consulta</option>
                        <option defaultValue="compras">Compras</option>
                        <option defaultValue="reclamos">Reclamos</option>
                        <option defaultValue="otro">Otro</option>
                    </select>
                    
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea name="mensaje" id="mensaje" cols={30} rows={10} placeholder="Escribe tu mensaje" defaultValue={""} onChange={this.handlerChange}/>
                   
                    <input type="submit" defaultValue="Enviar" />
                </form>
            </section> 
        )
    }
}