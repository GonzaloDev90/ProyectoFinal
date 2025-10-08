

function Message(propiedades) {
    return (
        <div className={"message-container " + (propiedades.author == 'Messi' ? 'message-container--right' : 'message-container--left')}>
            <div className="tarjeta-mensaje">
                <span className="message-author">{propiedades.author}</span>
                <p className="message-text">{propiedades.message}</p>
                <span className="message-time">{propiedades.timestamp}</span>
            </div>
            <br />
        </div>
    )
}

export default Message