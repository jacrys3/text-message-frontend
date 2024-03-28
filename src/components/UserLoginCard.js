import React, { useState } from 'react'
import PropTypes from 'prop-types'

import '../styles/UserLoginCard.css'

function UserLoginCard ({ setIsLoggedIn, setUsername }) {
  const [currentUsername, setCurrentUsername] = useState('')

  function onLogin () {
    setIsLoggedIn(true)
    setUsername(currentUsername)
    setCurrentUsername('')
  }

  return (
    <div className='userLoginCardBackground'>
      <div className='userLoginCardContainer'>
        <div className='userLoginCardHeader'>
          <div className='userLoginCardTitle'>Login</div>
        </div>
        <input
          type='text'
          placeholder='Username'
          value={currentUsername}
          onChange={(e) => setCurrentUsername(e.target.value)}
          className='userLoginCardUsernameInput'
        />
        <button onClick={onLogin} className='userLoginCardButton'>Login</button>
      </div>
    </div>
  )
}

UserLoginCard.propTypes = {
  setIsLoggedIn: PropTypes.func,
  setUsername: PropTypes.func
}

export default UserLoginCard
