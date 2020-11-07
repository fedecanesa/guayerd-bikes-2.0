import React from "react";


export default class ContactForm extends React.Component 
{
    constructor(){
        super();
        this.state= {
            name: "",
            nameChecked: "",

            formChecked: false
        }
    }

    handlerChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })  
    }

    submitForm = (event) =>
    {
        const { name } = this.state;
        let that = this;
        event.preventDefault()

        let validateFields = (name , email , phone , subjetc , message )=>{   
            validateName(name);
            this.setState({formChecked: true});
        }

        let validateName = (element) => {
            element === "" || element === " " ? this.setState({nameChecked: false}) : this.setState({nameChecked: true})    
        }


        let buildMessagePackage = (name) => {
            let objMessage = {name }
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
            const { name, nameChecked } = this.state;
            validateFields(name /* , this.state.email , this.state.phone , this.state.subject , this.state.message */ );

            setTimeout(()=>{ nameChecked && (sendData(buildMessagePackage(name))) }, 1000)
            
        }
        sendDataHandler();
    }


    
    render() {
        const { name, nameChecked } = this.state;
        return (
            <section className="contacto">
                <h2>Contacto</h2>
                <form action="#" method="POST" className="formulario" onSubmit={this.submitForm}>
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        type="text" 
                        name="name" 
                        className={nameChecked === false ? "error" : ""}
                        id="name" 
                        placeholder="Ingresa tu nombre" 
                        value={name} 
                        onChange={this.handlerChange}
                    />
                    <input type="submit" defaultValue="Enviar" />
                </form>
            </section> 
        )
    }
}