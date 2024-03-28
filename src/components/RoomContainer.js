import React, { useState } from 'react'
import PropTypes from 'prop-types'

import RoomCard from './RoomCard'
import AddRoomCard from './AddRoomCard'

import '../styles/RoomContainer.css'

function RoomContainer ({ roomId, setRoomId }) {
  const [rooms, setRooms] = useState([])
  const [showAddRoom, setShowAddRoom] = useState(false)

  function addRoom (username, newRoom) {
    setShowAddRoom(false)
    if (!newRoom) {
      return
    }
    setRooms([...rooms, newRoom])
    if (!roomId) {
      setRoomId(newRoom)
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
          <RoomCard key={room} room={room} setRoomId={setRoomId} />
        ))}
      </div>
      {showAddRoom && <AddRoomCard addRoom={addRoom} /> }
    </div>
  )
}

RoomContainer.propTypes = {
  roomId: PropTypes.string,
  setRoomId: PropTypes.func
}

export default RoomContainer
