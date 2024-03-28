import React from 'react'
import PropTypes from 'prop-types'

import MessageBubble from './MessageBubble'
import TextInputContainer from './TextInputContainer'

import '../styles/MessageContainer.css'

function MessageContainer ({ roomId, socket, messageHistory, username }) {
  return (
    <div className='messageArea'>
      <div className='roomTitle'>
        <h1>Room: {roomId}</h1>
      </div>
      <div className='messageHistory'>
        {messageHistory[roomId]?.map((msg, index) => {
          const alignLeft = msg.username !== username
          return (
            <MessageBubble key={msg.username} message={msg.message} alignLeft={alignLeft} />
          )
        })}
      </div>
      <TextInputContainer roomId={roomId} socket={socket} username={username} />
    </div>
  )
}

MessageContainer.propTypes = {
  roomId: PropTypes.string,
  socket: PropTypes.object,
  messageHistory: PropTypes.object,
  username: PropTypes.string
}

export default MessageContainer
