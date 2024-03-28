import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'

import RoomContainer from './components/RoomContainer'
import MessageContainer from './components/MessageContainer'

import './App.css'

const socket = io(process.env.REACT_APP_WEBSOCKET_URL)

function App () {
  const [roomId, setRoomId] = useState('')
  const [messageHistory, setMessageHistory] = useState({})

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
    <div className='app'>
      <RoomContainer roomId={roomId} setRoomId={setRoomId} />
      <MessageContainer roomId={roomId} socket={socket} messageHistory={messageHistory} />
    </div>
  )
}

export default App
