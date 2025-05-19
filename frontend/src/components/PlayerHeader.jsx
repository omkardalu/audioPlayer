import React from 'react'
import { Link } from 'react-router-dom'

const PlayerHeader = () => {
  return (
    <Link to={'/profile'} className='player-header'>profile</Link>
  )
}

export default PlayerHeader