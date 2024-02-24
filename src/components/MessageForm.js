import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io(process.env.REACT_APP_WEBSOCKET_URL);

function MessageForm() {
    const [receivedMessage, setReceivedMessage] = useState('');

    useEffect(() => {
        socket.on('receive_message', (msg) => {
            console.log(msg);
            setReceivedMessage(msg);
        });

        return () => {
            socket.off('receive_message');
        };
    }, []);

    function sendMessage(msg) {
        socket.emit('send_message', msg);
    }

    const [message, setMessage] = useState('');
    const [currentMessage, setCurrentMessage] = useState('');

    function handleCurrentMessageChange(e) {
        setCurrentMessage(e.target.value);
    }

    function handleMessageSubmit(e) {
        e.preventDefault();
        setMessage(currentMessage);
        sendMessage(currentMessage);
        setCurrentMessage('');
    }

    return (
        <div>
            <h1>Message Form</h1>
            <form onSubmit={handleMessageSubmit}>
                <input 
                    name='messageInput' 
                    placeholder='Enter message..' 
                    type='text' 
                    value={currentMessage}
                    onChange={handleCurrentMessageChange}
                />
                <button type='submit'>Submit</button>
            </form>
            <p>Message: {message}</p>
            <p>Received message: {receivedMessage}</p>
        </div>
    );
}

export default MessageForm;