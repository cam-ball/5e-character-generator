import React from 'react'

const Roller = (props) => {
  const { lockedIn } = props

  if(lockedIn === true) {
    return (
      <div class="options">
        <input type="radio" id="standard" name="rollmethod"/>
        <label for="standard"> Standard Array </label>
        <input type="radio" id="manual" name="rollmethod"/>
        <label for="manual">Manual</label>
      </div>
    )
  } else {
    return null;
  }
}

export default Roller;
