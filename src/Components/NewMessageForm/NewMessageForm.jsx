import React, { useRef } from 'react';

const NewMessageForm = ({ onCreateNewMessage }) => {
    const textareaRef = useRef(null);

    const sendMessage = (message) => {
        const trimmed = message.trim();
        if (trimmed.length === 0) return;
        onCreateNewMessage(trimmed);
        if (textareaRef.current) textareaRef.current.value = '';
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        sendMessage(event.target.mensaje.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            sendMessage(event.target.value);
        }
    };

    return (
        <form className='form' onSubmit={handleSubmit}>
            <textarea
                ref={textareaRef}
                className='text-form'
                id='mensaje'
                name='mensaje'
                onKeyDown={handleKeyDown}
            />
            <button className='btn-form'>Enviar mensaje</button>
        </form>
    );
};

export default NewMessageForm;