import React, { useState } from 'react'
import PropTypes from 'prop-types'

import '../styles/AddRoomCard.css'

function AddRoomCard ({ addRoom }) {
  const [username, setUsername] = useState('')
  const [roomId, setRoomId] = useState('')

  function handleAddRoom (e) {
    e.preventDefault()
    if (!username) {
      alert('Please type a username first')
      return
    }
    if (!roomId) {
      alert('Please type a room id first')
      return
    }
    addRoom(username, roomId)
    setUsername('')
    setRoomId('')
  }

  function handleUsernameChange (e) {
    setUsername(e.target.value)
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
        <input className='addRoomCardUsername' type='text' placeholder='Username' value={username} onChange={handleUsernameChange} />
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
