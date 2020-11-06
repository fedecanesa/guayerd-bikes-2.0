import React from "react";


export default class ContactForm extends React.Component 
{
    constructor(){
        super();
        this.state= {
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: ""
        }
    }

    handlerChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })  
    }

    submitForm = (event) =>
    {
        let that = this;
        event.preventDefault()

        let validarCampos = (name , email , phone , subjetc , message ) =>
        {   
            let validacion = false;

            let validacionNombre = validarNombre(name);
            let validacionMail = validarEmail(email);
            let validacionTelefono = validarTelefono(phone);
            validarTema(subjetc);
            let validacionMensaje = validarMensaje(message);

            if(validacionNombre && validacionMail && validacionTelefono && validacionMensaje) { 
                validacion = true; 
            }

            return validacion;
        }

        let validarNombre = (elemento) => {
            let respuesta = true;
            if((elemento === "") || (elemento === " ") /* || hasNumber(elemento.value) */) {
                /* that.setState({name: ""}) */
                /* elemento.placeholder = "Por favor, ingrese correctamente su nombre."; */
                /* elemento.classList.add("error"); */
                respuesta = false;
            } /* else {
                elemento.classList.remove("error"); 
            }*/
            return respuesta;
        }

        let validarEmail = (elemento) => {
            let respuesta = true;
            const PATTERN_MAIL = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
            if ( (elemento === "") || (elemento === " ") || !(PATTERN_MAIL.test(elemento)) ) {
                /* that.setState({email: ""}) */
                /* elemento.placeholder = "Por favor, ingrese correctamente su email.";
                elemento.classList.add("error"); */
                respuesta = false;
            } else {
                /* elemento.classList.remove("error"); */
            }
            return respuesta;
        }

        let validarTelefono = (elemento) => {
            let respuesta = true;

            if( (elemento === "") || (elemento === " ") || isNaN(elemento) )
            {
                /* that.setState({name: ""}) */
                /* elemento.placeholder = "Por favor, ingrese correctamente su teléfono.";
                elemento.classList.add("error"); */
                respuesta = false;
            } 
            else {
                /* elemento.classList.remove("error"); */
            }
            return respuesta;
        }

        let validarTema = (elemento) =>
        {
            if(elemento.value === "-") {
                elemento.value = "otro";
            }
        }
        
        let validarMensaje = (elemento) =>{
            let respuesta = true;
            if(elemento.value === "") {   
                elemento.placeholder = "Por favor, ingrese su mensaje.";
                elemento.classList.add("error");
                respuesta = false;
            } 
            else {
                elemento.classList.remove("error");
            }
            return respuesta;
        }

        let empaquetarMensaje = (name , email , phone , subject , message) => {
            let objMensaje = {name , email, phone, subject , message}
            return objMensaje
        }

        let sendData = (OBJ_Mensaje) =>
        {
            const RECURSO_CONSULTAS = "https://guayerd-bikes.herokuapp.com/submitForm"
            fetch(RECURSO_CONSULTAS, {
                method:'POST',
                body: JSON.stringify(OBJ_Mensaje),
                headers:{'Content-Type':'application/json'}})
            .then((response) => response.json())
            .then((mensaje)=> {!mensaje.err && alert(`Gracias ${mensaje.name}, su mensaje ha sido enviado con éxito.`)})
            .catch(err=> {alert(`No enviado. Intente nuevamente.`)});
        }
        
        let sendDataHandler = () =>{
            let validacion = validarCampos(this.state.name , this.state.email , this.state.phone , this.state.subject , this.state.message );
            
            if(validacion) {
                let nuevoMensaje = empaquetarMensaje(this.state.name , this.state.email , this.state.phone , this.state.subject , this.state.message);
                sendData(nuevoMensaje);
            }
        }
        sendDataHandler();
    }


    
    render() {
        return (
            <section className="contacto">
                <h2>Contacto</h2>
                <form action="#" method="POST" className="formulario" onSubmit={this.submitForm}>
                    {/* <input type="hidden" name="grupo" defaultValue="e" /> */}
                    
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" name="name" id="name" placeholder="Ingresa tu nombre" value={this.state.name} onChange={this.handlerChange} />
                    
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" placeholder="Ingresa tu Email (Ej: contacto@guayerd.com)" value={this.state.email} onChange={this.handlerChange} />
                    
                    <label htmlFor="nombre">Telefono</label>
                    <input type="text" name="phone" id="phone" placeholder="Ingresa tu telefono" value={this.state.phone} onChange={this.handlerChange}/>
                    
                    <label htmlFor="tema">Tema</label>
                    <select name="subject" id="subject" value={this.state.subject} onChange={this.handlerChange}>
                        <option defaultValue="-" disabled>-</option>
                        <option defaultValue="consulta">Consulta</option>
                        <option defaultValue="compras">Compras</option>
                        <option defaultValue="reclamos">Reclamos</option>
                        <option defaultValue="otro">Otro</option>
                    </select>
                    
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea name="message" id="message" cols={30} rows={10} placeholder="Escribe tu mensaje" value={this.state.massage} /* defaultValue={""} */ onChange={this.handlerChange}/>
                   
                    <input type="submit" defaultValue="Enviar" />
                </form>
            </section> 
        )
    }
}