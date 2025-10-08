import { useContext } from 'react'
import { Link } from 'react-router'
import { ContactListContext } from '../../Context/ContactListContext'
import './contactList.css'

const ContactList = () => {
    const { contactList, isContactListLoading } = useContext(ContactListContext)

    return (
        <div>
            {
                isContactListLoading
                    ? <span>Cargando contactos...</span>
                    : contactList.map(
                        (contact) => {
                            return <ContactItem
                                contact={contact}
                                key={contact.id}
                            />
                        }
                    )
            }

        </div>
    )
}

const ContactItem = (props) => {
    const contact = props.contact
    return (
        <Link to={'/contacto/' + contact.id} >
            <div className='contact-bar'>
                <img src={contact.profile_img} className='contact-profile' />
                <h2 className='contact-name'>{contact.name}</h2>
                <span className='contact-status'>{contact.is_connected ? 'Online' : 'Offline'}</span>
                <br />
            </div>
        </Link>
    )
}

export default ContactList