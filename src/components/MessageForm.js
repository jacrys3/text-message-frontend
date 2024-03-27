import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io(process.env.REACT_APP_WEBSOCKET_URL);

function MessageForm() {
    const [messageHistory, setMessageHistory] = useState({});
    const [roomId, setRoomId] = useState("0001");

    function sendMessage(msg) {
        socket.emit('send_message', { room: roomId, message: msg });
    }

    const [message, setMessage] = useState('');
    const [currentMessage, setCurrentMessage] = useState('');

    useEffect(() => {
        socket.on('receive_message_history', (msg_history) => {
            setMessageHistory(msg_history);
        });

        socket.emit('join_room', roomId);

        return () => {
            socket.off('receive_message_history');
            socket.emit('leave_room', roomId);
        };
    }, [roomId]);

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
            <select value={roomId} onChange={(e) => {setRoomId(e.target.value)}}>
                <option value="0001">0001</option>
                <option value="0002">0002</option>
            </select>
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
            <div>
                <h2>Message history:</h2>
                {messageHistory[roomId]?.map((msg, index) => (
                    <p key={index}>{msg}</p>
                ))}
            </div>
        </div>
    );
}

export default MessageForm;