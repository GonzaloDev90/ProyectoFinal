import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import MessagesList from '../../Components/MessagesList/MessagesList'
import NewMessageForm from '../../Components/NewMessageForm/NewMessageForm'
import { ContactDetailContext } from '../../Context/ContactDetailContext'
import ContactList from '../../Components/ContactList/ContactList'

function MessageScreen() {
    const { isContactDetailLoading, contactDetailed, onCreateNewMessage } = useContext(ContactDetailContext)
    const navigate = useNavigate()

    const handleBackToList = () => {
        navigate('/')
    }

    return (
        <div className='message-screen'>
            <div className='message-screen__contact-list-container'>
                <ContactList />
            </div>
            <div className='message-screen__messages-container'>
                <div className='contact-bar-info'>
                    <button onClick={handleBackToList} className='back-button'>←</button>
                    <div className='contact-bar-info-contact'>{contactDetailed?.name}</div>
                </div>

                {isContactDetailLoading ? (
                    <span>cargando...</span>
                ) : contactDetailed ? (
                    <>
                        <MessagesList messages={contactDetailed.messages} />
                        <div className='messages-form-container'>
                            <NewMessageForm onCreateNewMessage={onCreateNewMessage} />
                        </div>
                    </>
                ) : (
                    <span>contacto no encontrado</span>
                )}
            </div>
        </div>
    )
}

export default MessageScreen
