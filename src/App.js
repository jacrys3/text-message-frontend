import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'

import RoomContainer from './components/RoomContainer'
import MessageContainer from './components/MessageContainer'
import UserLoginCard from './components/UserLoginCard'

import './App.css'

const socket = io(process.env.REACT_APP_WEBSOCKET_URL)

function App () {
  const [roomId, setRoomId] = useState('')
  const [messageHistory, setMessageHistory] = useState({})
  const [username, setUsername] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

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

  const roomProp = { roomId, setRoomId }

  return (
    <div className='app'>
      <RoomContainer roomProp={roomProp} messageHistory={messageHistory} />
      <MessageContainer roomId={roomId} socket={socket} messageHistory={messageHistory} username={username} />
      {!isLoggedIn && <UserLoginCard setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />}
    </div>
  )
}

export default App
