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

        let validateFields = (name , email , phone , subjetc , message ) =>
        {   
            let validation = false;

            let validationNombre = validateName(name);
            let validationMail = validateEmail(email);
            let validationTelefono = validatePhone(phone);
            validateSubject(subjetc);
            let validationmessage = validateMessage(message);

            if(validationNombre && validationMail && validationTelefono && validationmessage) { 
                validation = true; 
            }

            return validation;
        }

        let validateName = (element) => {
            let response = true;
            if((element === "") || (element === " ") /* || hasNumber(element.value) */) {
                /* that.setState({name: ""}) */
                /* element.placeholder = "Por favor, ingrese correctamente su nombre."; */
                /* element.classList.add("error"); */
                response = false;
            } /* else {
                element.classList.remove("error"); 
            }*/
            return response;
        }

        let validateEmail = (element) => {
            let response = true;
            const PATTERN_MAIL = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
            if ( (element === "") || (element === " ") || !(PATTERN_MAIL.test(element)) ) {
                /* that.setState({email: ""}) */
                /* element.placeholder = "Por favor, ingrese correctamente su email.";
                element.classList.add("error"); */
                response = false;
            } else {
                /* element.classList.remove("error"); */
            }
            return response;
        }

        let validatePhone = (element) => {
            let response = true;

            if( (element === "") || (element === " ") || isNaN(element) )
            {
                /* that.setState({name: ""}) */
                /* element.placeholder = "Por favor, ingrese correctamente su teléfono.";
                element.classList.add("error"); */
                response = false;
            } 
            else {
                /* element.classList.remove("error"); */
            }
            return response;
        }

        let validateSubject = (element) =>
        {
            if(element.value === "-") {
                element.value = "otro";
            }
        }
        
        let validateMessage = (element) =>{
            let response = true;
            if(element.value === "") {   
                element.placeholder = "Por favor, ingrese su message.";
                element.classList.add("error");
                response = false;
            } 
            else {
                element.classList.remove("error");
            }
            return response;
        }

        let buildMessagePackage = (name , email , phone , subject , message) => {
            let objMessage = {name , email, phone, subject , message}
            return objMessage;
        }

        let sendData = (OBJ_message) =>
        {
            const RECURSO_CONSULTAS = "https://guayerd-bikes.herokuapp.com/submitForm";
            fetch(RECURSO_CONSULTAS, {
                method:'POST',
                body: JSON.stringify(OBJ_message),
                headers:{'Content-Type':'application/json'}})
            .then((response) => response.json())
            .then((message)=> {!message.err && alert(`Gracias ${message.name}, su message ha sido enviado con éxito.`)})
            .catch(err=> {alert(`No enviado. Intente nuevamente.`)});
        }
        
        let sendDataHandler = () =>{
            let validation = validateFields(this.state.name , this.state.email , this.state.phone , this.state.subject , this.state.message );
            
            if(validation) {
                let nuevomessage = buildMessagePackage(this.state.name , this.state.email , this.state.phone , this.state.subject , this.state.message);
                sendData(nuevomessage);
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
                    
                    <label htmlFor="message">message</label>
                    <textarea name="message" id="message" cols={30} rows={10} placeholder="Escribe tu message" value={this.state.massage} /* defaultValue={""} */ onChange={this.handlerChange}/>
                   
                    <input type="submit" defaultValue="Enviar" />
                </form>
            </section> 
        )
    }
}