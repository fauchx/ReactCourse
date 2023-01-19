import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'

const ConectedComponent = ({contact}) => {
  return (
    <div>
        <h2>Nombre: {contact.name}</h2>
        <h2>Apellido: {contact.last_name}</h2>
        <h3>Email: {contact.email}</h3>
        <h4>Conectado: {contact.conectado ? 'Contacto en linea':'Contacto no disponible'}</h4>
    </div>
  )
}

ConectedComponent.propTypes = {
    contact : PropTypes.instanceOf(Contact)
}

export default ConectedComponent