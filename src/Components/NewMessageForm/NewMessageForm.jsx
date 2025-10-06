import React, { useContext } from 'react'
import { ContactListContext } from '../../Context/ContactListContext'
import './newMessageForm.css'

const NewMessageForm = (props) => {
    console.log(useContext(ContactListContext))
    const handleSubmit = (event) =>{
        event.preventDefault()
        const form = event.target
        const message_value = form.mensaje.value

        props.onCreateNewMessage(
            message_value
        )
    }

    return (

        <form className='form' onSubmit={handleSubmit}>
            <textarea className='text-form' id='mensaje' name='mensaje'  />
            <button className='btn-form'>Enviar mensaje</button>
        </form>

    )
}

export default NewMessageForm