import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ContactListContext } from '../../Context/ContactListContext'

const ContactList = () => {
    const { contactList, isContactListLoading } = useContext(ContactListContext)
    const [searchTerm, setSearchTerm] = useState('')

    // Filtrar contactos según el término de búsqueda
    const filteredContacts = contactList.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div>
            <input
                type="text"
                placeholder="Buscar contactos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {
                isContactListLoading
                    ? <span>Cargando contactos...</span>
                    : filteredContacts.map(contact => (
                        <ContactItem
                            contact={contact}
                            key={contact.id}
                        />
                    ))
            }
        </div>
    )
}

const ContactItem = (props) => {
    const contact = props.contact
    return (
        <Link className="no-underline" to={'/contacto/' + contact.id}>
            <div className='contact-bar'>
                <img src={contact.profile_img} className='contact-profile' alt={contact.name} />
                <h2 className='contact-name'>{contact.name}</h2>
                <span className='contact-status'>{contact.is_connected ? 'Online' : 'Offline'}</span>
                <br />
            </div>
        </Link>
    )
}

export default ContactList