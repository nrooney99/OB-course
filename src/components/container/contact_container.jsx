import React from 'react'
import { Contact } from '../../models/contact.class'
import ContactComponent from '../pure/contact'

export default function ContactContainer() {
    const defaultContact = new Contact('Nico','Rooney','nrooney@itba.edu.ar',true)
    
    return (
        // 
        <div>
    <ContactComponent contact={defaultContact}/>
        </div>
    )
}
