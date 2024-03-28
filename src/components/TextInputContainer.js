import React, { useState } from 'react'
import PropTypes from 'prop-types'

import '../styles/TextInputContainer.css'

function TextInputContainer ({ roomId, socket, username }) {
  const [currentMessage, setCurrentMessage] = useState('')

  function handleMessageSubmit (e) {
    if (!roomId) {
      alert('Please select a room first')
      return
    }

    e.preventDefault()
    if (currentMessage) {
      let time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      if (time[0] === '0') time = time.slice(1)
      socket.emit('send_message', { room: roomId, message: currentMessage, username, time })
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
  socket: PropTypes.object,
  username: PropTypes.string
}

export default TextInputContainer
