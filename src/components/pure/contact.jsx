import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'

const ContactComponent = ({ contact }) => {
    return (
        <div>
            <h2>
                Nombre: { contact.firstName } { contact.lastName }
            </h2>
            <h3>
                Email: { contact.email }
            </h3>
            <h4>
                Contacto { contact.online ? 'En Linea':'No Disponible' }
            </h4>
        </div>
    )
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
}

export default ContactComponent