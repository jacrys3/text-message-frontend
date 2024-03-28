import React from 'react'
import PropTypes from 'prop-types'

import '../styles/MessageBubble.css'

function MessageBubble ({ message, alignLeft }) {
  const bubbleStyle = alignLeft ? 'messageBubbleLeft' : 'messageBubbleRight'
  return (
    <div className={bubbleStyle} data-testid='messageBubble'>
      <p>{message}</p>
    </div>
  )
}

MessageBubble.propTypes = {
  message: PropTypes.string,
  alignLeft: PropTypes.bool
}

export default MessageBubble
