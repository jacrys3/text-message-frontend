import React, { useState } from 'react'
import PropTypes from 'prop-types'

import RoomCard from './RoomCard'
import AddRoomCard from './AddRoomCard'

import '../styles/RoomContainer.css'

function RoomContainer ({ roomProp, messageHistory }) {
  const { roomId, setRoomId } = roomProp

  const [rooms, setRooms] = useState([])
  const [showAddRoom, setShowAddRoom] = useState(false)

  function addRoom (otherUsername) {
    setShowAddRoom(false)
    if (!otherUsername || rooms.includes(otherUsername)) {
      return
    }
    setRooms([...rooms, otherUsername])
    if (!roomId) {
      setRoomId(otherUsername)
    }
  }

  function handleAddRoom () {
    setShowAddRoom(true)
  }

  return (
    <div className='roomSidebar'>
      <button onClick={handleAddRoom} className='addRoomButton'>Add Room</button>
      <div className='roomsContainer'>
        {rooms.map((room) => (
          <RoomCard key={room} room={room} setRoomId={setRoomId} username='username' messageHistory={messageHistory[room]} />
        ))}
      </div>
      {showAddRoom && <AddRoomCard addRoom={addRoom} /> }
    </div>
  )
}

RoomContainer.propTypes = {
  roomProp: PropTypes.object,
  messageHistory: PropTypes.object
}

export default RoomContainer
