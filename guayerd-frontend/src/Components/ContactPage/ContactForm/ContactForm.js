import React from "react";
import URL_BACKEND from "../../../config";

const initialState = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",

    errName: null,
    errEmail: null,
    errPhone: null,
    errSubject: null,
    errMessage: null
}

export default class ContactForm extends React.Component {
    constructor() {
        super();
        this.state = initialState;
    }


    validate = () => {

        let name = null;
        let email = null;
        let phone = null;
        let message = null;

        const expresiones = {
            PATTERN_NAME: /^[a-zA-ZÀ-ÿ\s\d]{1,40}$/, // Letras, espacios y números, pueden llevar acentos.
            PATTERN_MAIL: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            PATTERN_PHONE: /^\d{7,14}$/ // 7 a 14 caracteres numericos.
        }

        // NAME
        if (!expresiones.PATTERN_NAME.test(this.state.name)) { // AGREGAR: NO PERMITIR SOLO ESPACIOS
            name = "Nombre inválido";
        }

        // E-MAIL
        if (!expresiones.PATTERN_MAIL.test(this.state.email)) { 
            email = "Correo inválido";
        }

        // PHONE
        if (!expresiones.PATTERN_PHONE.test(this.state.phone)) {
            phone = "Teléfono inválido";
        }

        // SUBJET
        if (this.state.subject === "" || this.state.subject === "-") {
            this.setState({subject: "Otro"})
        }

        // MESSAGE
        if (this.state.message.length <= 20) {
            message = "Minimo 20 caracteres";
        }

        // UPDATE STATE
        if(name || email || phone || message) {
            this.setState({
                errName:name,
                errEmail:email,
                errPhone:phone,
                errMessage:message
            });

            return false;
        }

        return true;
    }


    handlerChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitForm = (e) => {
        e.preventDefault();

        const isValidate = this.validate();

        if(isValidate) {

            const { name, email , phone , subject , message} = this.state;
            const OBJ_message = {name, email, phone, subject, message};

            const URL_QUERYS = `${URL_BACKEND}/submitForm`;
            fetch(URL_QUERYS, {
                method:'POST',
                body: JSON.stringify(OBJ_message),
                headers:{'Content-Type':'application/json'}})
            .then((response) => response.json())
            .then((message)=> {!message.err && alert(`Gracias ${message.name}, su mensaje ha sido enviado con éxito.`)})
            .catch(err=> {alert(`No enviado. Intente nuevamente.`)});


            this.setState(initialState);
        }

    }

    render() {

        return (
            <section className="contacto">
                <h2>Contacto</h2>
                <form action="#" method="POST" className="formulario" onSubmit={this.submitForm}>

                    <label htmlFor="nombre">Nombre</label>
                    <input 
                        type="text" 
                        name="name" id="name" 
                        placeholder="Ingrese su nombre..." 
                        value={this.state.name} 
                        onChange={this.handlerChange} 
                        className={this.state.errName !== null ? "error" : ""} 
                    />
                    {
                        this.state.errName && (
                            <div className="error-message"><span>{this.state.errName}</span></div>
                        )
                    }

                    <label htmlFor="email">E-mail</label>
                    <input 
                        type="text" 
                        name="email" 
                        id="email" 
                        placeholder="Ingrese su e-mail (Ej: contacto@guayerd.com)..." 
                        value={this.state.email} 
                        onChange={this.handlerChange} 
                        className={this.state.errEmail !== null ? "error" : ""}
                    />
                    {
                        this.state.errEmail && (
                            <div className="error-message"><span>{this.state.errEmail}</span></div>
                        )
                    }

                    <label htmlFor="nombre">Teléfono</label>
                    <input 
                        type="text" 
                        name="phone" id="phone" 
                        placeholder="Ingrese su teléfono..." 
                        value={this.state.phone} 
                        onChange={this.handlerChange} 
                        className={this.state.errPhone !== null ? "error" : ""}
                    />
                    {
                        this.state.errPhone && (
                            <div className="error-message"><span>{this.state.errPhone}</span></div>
                        )
                    }

                    <label htmlFor="tema">Tema</label>
                    <select 
                        name="subject" 
                        id="subject" 
                        value={this.state.subject} 
                        onChange={this.handlerChange}
                    >
                        <option defaultValue="-" selected readonly>-</option>
                        <option defaultValue="consulta">Consulta</option>
                        <option defaultValue="compras">Compras</option>
                        <option defaultValue="reclamos">Reclamos</option>
                        <option defaultValue="otro">Otro</option>
                    </select>

                    <label htmlFor="message">Mensaje</label>
                    <textarea 
                        name="message" 
                        id="message"
                        value={this.state.message}
                        cols={30} 
                        rows={10} 
                        placeholder="Ingrese su mensaje..." 
                        onChange={this.handlerChange} 
                        className={this.state.errMessage !== null ? "error" : ""}
                    />
                    {
                        this.state.errMessage && (
                            <div className="error-message"><span>{this.state.errMessage}</span></div>
                        )
                    }

                    <input type="submit" defaultValue="Enviar" />
                </form>
            </section>
        )
    }
}