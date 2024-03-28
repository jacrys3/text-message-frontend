import React from 'react'
import PropTypes from 'prop-types'

import RoomCard from './RoomCard'

import '../styles/RoomContainer.css'

function RoomContainer ({ roomId, setRoomId }) {
  const [rooms, setRooms] = React.useState([])

  function handleAddRoom (e) {
    e.preventDefault()
    const newRoom = Math.floor(Math.random() * 10000).toString().padStart(4, '0')
    setRooms([...rooms, newRoom])
    if (!roomId) {
      setRoomId(newRoom)
    }
  }

  return (
    <div className='roomSidebar'>
      <button onClick={handleAddRoom} className='addRoomButton'>Add Room</button>
      <div className='roomsContainer'>
        {rooms.map((room) => (
          <RoomCard key={room} room={room} setRoomId={setRoomId} />
        ))}
      </div>
    </div>
  )
}

RoomContainer.propTypes = {
  roomId: PropTypes.string,
  setRoomId: PropTypes.func
}

export default RoomContainer
