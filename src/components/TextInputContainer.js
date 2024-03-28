import React, { useState } from 'react'
import PropTypes from 'prop-types'

import '../styles/TextInputContainer.css'

function TextInputContainer ({ roomId, socket }) {
  const [currentMessage, setCurrentMessage] = useState('')

  function handleMessageSubmit (e) {
    if (!roomId) {
      alert('Please select a room first')
      return
    }

    e.preventDefault()
    if (currentMessage) {
      socket.emit('send_message', { room: roomId, message: currentMessage })
      setCurrentMessage('')
    }
  }

  function handleCurrentMessageChange (e) {
    setCurrentMessage(e.target.value)
  }

  return (
    <div>
      <form onSubmit={handleMessageSubmit} className='messageForm'>
        <input
          placeholder='Enter message..'
          type='text'
          value={currentMessage}
          onChange={handleCurrentMessageChange}
          className='textInput'
        />
        <button type='submit' className='sendButton'>Send</button>
      </form>
    </div>
  )
}

TextInputContainer.propTypes = {
  roomId: PropTypes.string,
  socket: PropTypes.object
}

export default TextInputContainer
