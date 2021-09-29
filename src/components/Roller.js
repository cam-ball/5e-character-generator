import React from 'react'

const Roller = (props) => {
  const { lockedIn } = props

  if(lockedIn === true) {
    return (
      <p>
        I dunno what else you want from me.
      </p>
    )
  } else {
    return null;
  }
}

export default Roller;
