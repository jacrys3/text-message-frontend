import React from 'react'
import PropTypes from 'prop-types'
import '../styles/RoomCard.css'

function RoomCard ({ room, setRoomId }) {
  return (
    <div className='roomCard' onClick={() => setRoomId(room)}>
      <h3 className='roomName'>{room}</h3>
    </div>
  )
}

RoomCard.propTypes = {
  room: PropTypes.string,
  setRoomId: PropTypes.func
}

export default RoomCard
