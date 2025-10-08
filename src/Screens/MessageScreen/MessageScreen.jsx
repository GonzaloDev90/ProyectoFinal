import React, { useContext } from 'react'
import MessagesList from '../../Components/MessagesList/MessagesList'
import NewMessageForm from '../../Components/NewMessageForm/NewMessageForm'
import ContactList from '../../Components/ContactList/ContactList'
import { ContactDetailContext } from '../../Context/ContactDetailContext'

function MessageScreen() {


    const { isContactDetailLoading, contactDetailed, onCreateNewMessage } = useContext(ContactDetailContext)


    return (
        <div className='message-screen'>
            <div className='message-screen__contact-list-container'>
                <ContactList />
            </div>

            <div className='message-screen__messages-container'>
                <div className='contact-bar-info'>
                    <div className='contact-bar-info-button'><button>{"<-"}</button></div>
                    <div className='contact-bar-info-contact'></div>
                </div>
                {
                    isContactDetailLoading
                        ? <span>cargando...</span>
                        : (
                            contactDetailed
                                ? <MessagesList
                                    messages={contactDetailed.messages}
                                />
                                : <span>contacto no encontrado</span>
                        )
                }


                <div className='messages-form-container'>
                    <NewMessageForm
                        onCreateNewMessage={onCreateNewMessage}
                    />
                </div>
            </div>
        </div>
    )
}

export default MessageScreen