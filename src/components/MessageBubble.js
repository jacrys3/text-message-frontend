import React from 'react'
import PropTypes from 'prop-types'

import '../styles/MessageBubble.css'

function MessageBubble ({ message }) {
  return (
    <div className='messageBubble'>
      <p>{message}</p>
    </div>
  )
}

MessageBubble.propTypes = {
  message: PropTypes.string
}

export default MessageBubble
