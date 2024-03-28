import React, { useState } from 'react'
import PropTypes from 'prop-types'

import '../styles/AddRoomCard.css'

function AddRoomCard ({ addRoom }) {
  const [roomId, setRoomId] = useState('')

  function handleAddRoom (e) {
    e.preventDefault()
    if (!roomId) {
      alert('Please type a room id first')
      return
    }
    addRoom(roomId)
    setRoomId('')
  }

  function handleRoomIdChange (e) {
    setRoomId(e.target.value)
  }

  return (
    <div className='addRoomCardBackground'>
      <div className='addRoomCardContainer'>
        <div className='addRoomCardHeader'>
          <div className='addRoomCardTitle'>Add Room</div>
          <button onClick={() => addRoom('', '')} className='addRoomCardExit'>X</button>
        </div>
        <input className='addRoomCardRoomId' type='text' placeholder='Room Id' value={roomId} onChange={handleRoomIdChange} />
        <button onClick={handleAddRoom} className='addRoomCardButton'>Submit</button>
      </div>
    </div>
  )
}

AddRoomCard.propTypes = {
  addRoom: PropTypes.func
}

export default AddRoomCard
