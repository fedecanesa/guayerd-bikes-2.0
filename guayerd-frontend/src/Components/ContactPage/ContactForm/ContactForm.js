import React from "react";

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
        // let subject = null;
        let message = null;

        const expresiones = {
            nombre: /^[a-zA-ZÀ-ÿ\s\d]{1,40}$/, // Letras y espacios, pueden llevar acentos.
            correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            telefono: /^\d{7,14}$/ // 7 a 14 numeros.
        }

        // NAME
        if (!expresiones.nombre.test(this.state.name)) { // AGREGAR: NO PERMITIR SOLO ESPACIOS
            name = "Nombre invalido";
        }

        // EMAIL
        if (!expresiones.correo.test(this.state.email)) { 
            email = "Correo invalido";
        }

        // PHONE
        if (!expresiones.telefono.test(this.state.phone)) {
            phone = "Telefono invalido";
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

            const RECURSO_CONSULTAS = "https://guayerd-bikes.herokuapp.com/submitForm";
            fetch(RECURSO_CONSULTAS, {
                method:'POST',
                body: JSON.stringify(OBJ_message),
                headers:{'Content-Type':'application/json'}})
            .then((response) => response.json())
            .then((message)=> {!message.err && alert(`Gracias ${message.name}, su message ha sido enviado con éxito.`)})
            .catch(err=> {alert(`No enviado. Intente nuevamente.`)});


            this.setState(initialState);
        }

    }



    render() {

        return (
            <section className="contacto">
                <h2>Contacto</h2>
                <form action="#" method="POST" className="formulario" onSubmit={this.submitForm}>
                    {/* <input type="hidden" name="grupo" defaultValue="e" /> */}

                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" name="name" id="name" placeholder="Ingresa tu nombre" value={this.state.name} onChange={this.handlerChange} className={this.state.errName !== null ? "error" : ""} />
                    {
                        this.state.errName && (
                            <span>{this.state.errName}</span>
                        )
                    }

                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" placeholder="Ingresa tu Email (Ej: contacto@guayerd.com)" value={this.state.email} onChange={this.handlerChange} className={this.state.errEmail !== null ? "error" : ""} />
                    {
                        this.state.errEmail && (
                            <span>{this.state.errEmail}</span>
                        )
                    }

                    <label htmlFor="nombre">Telefono</label>
                    <input type="text" name="phone" id="phone" placeholder="Ingresa tu telefono" value={this.state.phone} onChange={this.handlerChange} className={this.state.errPhone !== null ? "error" : ""} />
                    {
                        this.state.errPhone && (
                            <span>{this.state.errPhone}</span>
                        )
                    }

                    <label htmlFor="tema">Tema</label>
                    <select name="subject" id="subject" value={this.state.subject} onChange={this.handlerChange}>
                        <option defaultValue="-" disabled>-</option>
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
                    placeholder="Escribe tu message" 
                    /* defaultValue={""} */ 
                    onChange={this.handlerChange} 
                    className={this.state.errMessage !== null ? "error" : ""} />
                    {
                        this.state.errMessage && (
                            <span>{this.state.errMessage}</span>
                        )
                    }

                    <input type="submit" defaultValue="Enviar" />
                </form>
            </section>
        )
    }
}