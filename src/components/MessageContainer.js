import React from 'react'
import PropTypes from 'prop-types'

import MessageBubble from './MessageBubble'
import TextInputContainer from './TextInputContainer'

import '../styles/MessageContainer.css'

function MessageContainer ({ roomId, socket, messageHistory }) {
  return (
    <div className='messageArea'>
      <div className='roomTitle'>
        <h1>Room: {roomId}</h1>
      </div>
      <div className='messageHistory'>
        {messageHistory[roomId]?.map((msg, index) => (
          <MessageBubble key={msg} message={msg} />
        ))}
      </div>
      <TextInputContainer roomId={roomId} socket={socket} />
    </div>
  )
}

MessageContainer.propTypes = {
  roomId: PropTypes.string,
  socket: PropTypes.object,
  messageHistory: PropTypes.object
}

export default MessageContainer
