import React, { useEffect, useRef } from 'react';
import Message from '../Message/Message';

const MessagesList = ({ messages }) => {
  const messagesEndRef = useRef(null);

  // Función para hacer scroll al final
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="messages-list" style={{ overflowY: 'auto', height: '100%' }}>
      {messages.map(msg => (
        <Message
          key={msg.id}
          author={msg.author}
          timestamp={msg.timestamp}
          message={msg.message}
          id={msg.id}
        />
      ))}
      {}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessagesList;
