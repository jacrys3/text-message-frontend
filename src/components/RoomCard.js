import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import '../styles/RoomCard.css'

function RoomCard ({ room, setRoomId, username, time, messageHistory }) {
  const [recentMessage, setRecentMessage] = useState('')

  useEffect(() => {
    if (messageHistory) {
      const recentMessage = messageHistory[messageHistory.length - 1]
      setRecentMessage(recentMessage.message)
    }
  }, [messageHistory])

  return (
    <div className='roomCard' onClick={() => setRoomId(room)}>
      <div className='roomCardUserImageContainer'>
        <img className='roomCardUserImage' src='https://www.w3schools.com/howto/img_avatar.png' alt='user' />
      </div>
      <div className='roomCardDetailsContainer'>
        <div className='roomCardUserNameContainer'>
          <div className='roomCardUserName'>{username}</div>
          <div className='roomCardTime'>{time}</div>
        </div>
        <div className='roomCardRecentMessageContainer'>
          <div className='roomCardRecentMessage'>{recentMessage}</div>
        </div>
      </div>
    </div>
  )
}

RoomCard.propTypes = {
  room: PropTypes.string,
  setRoomId: PropTypes.func,
  username: PropTypes.string,
  time: PropTypes.string,
  messageHistory: PropTypes.object
}

export default RoomCard
