import React from "react";
import ContactForm from "./ContactForm/ContactForm";
import Map from "./Map/Map";

export default class ContactPage extends React.Component 
{
    render() {
        return (
            <>
                <ContactForm />
                <Map />
            </>
        )
    }
}