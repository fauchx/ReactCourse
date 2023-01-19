import React from 'react'
import { Contact } from '../../models/contact.class' 
import ConectedComponent from '../pure/conected'

export const ContactListComponent = () => {
    const defaultContact = new Contact("Demar","DeRozan","DeMarRoz@gmail.com",true);
  return (
    <div> 
        <div>
            TU CONTACTO
        </div>
        <div>
            <ConectedComponent contact={defaultContact}></ConectedComponent>
        </div>
    </div>
  )
}
