import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import '../styles/MessageForm.css'

const socket = io(process.env.REACT_APP_WEBSOCKET_URL)

function MessageForm () {
  const [messageHistory, setMessageHistory] = useState({})
  const [roomId, setRoomId] = useState('')
  const [currentMessage, setCurrentMessage] = useState('')
  const [rooms, setRooms] = useState([])

  function sendMessage (msg) {
    socket.emit('send_message', { room: roomId, message: msg })
  }

  function handleCurrentMessageChange (e) {
    setCurrentMessage(e.target.value)
  }

  function handleMessageSubmit (e) {
    if (!roomId) {
      alert('Please select a room first')
      return
    }
    e.preventDefault()
    sendMessage(currentMessage)
    setCurrentMessage('')
  }

  function handleAddRoom (e) {
    e.preventDefault()
    const newRoom = Math.floor(Math.random() * 10000).toString().padStart(4, '0')
    setRooms([...rooms, newRoom])
    if (!roomId) {
      setRoomId(newRoom)
    }
  }

  useEffect(() => {
    socket.on('receive_message_history', (msgHistory) => {
      setMessageHistory(msgHistory)
    })

    socket.emit('join_room', roomId)

    return () => {
      socket.off('receive_message_history')
      socket.emit('leave_room', roomId)
    }
  }, [roomId])

  return (
    <div className='page'>
      <div className='roomSidebar'>
        <button onClick={handleAddRoom}>Add Room</button>
        <select value={roomId} onChange={(e) => { setRoomId(e.target.value) }}>
          {rooms.map((room) => (
            <option key={room} value={room}>{room}</option>
          ))}
        </select>
      </div>
      <div className='messageArea'>
        <div className='roomName'>
          <h1>Room: {roomId}</h1>
        </div>
        <div className='messageHistory'>
          {messageHistory[roomId]?.map((msg, index) => (
            <p key={index}>{msg}</p>
          ))}
        </div>
        <div>
          <form onSubmit={handleMessageSubmit} className='messageForm'>
            <input
              name='messageInput'
              placeholder='Enter message..'
              type='text'
              value={currentMessage}
              onChange={handleCurrentMessageChange}
              className='textInput'
            />
            <button type='submit' className='sendButton'>Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default MessageForm
