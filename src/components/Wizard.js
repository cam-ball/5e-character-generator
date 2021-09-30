import React, { useState } from 'react'
import Character from './Character'
import Roller from './Roller'

const Wizard = (props) => {
  const sample = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  }

  const shuffleCharacter = () => {
    setCharacterClass(sample(classes));
    setCharacterRace(sample(races));
    setCharacterAlignment(sample(alignments));
  }

  const lockIn = () => {
    setLockedIn(true); 
  }

  const { alignments, races, classes } = props.srdData;
  const [characterAlignment, setCharacterAlignment] = useState(sample(alignments))
  const [characterRace, setCharacterRace] = useState(sample(races))
  const [characterClass, setCharacterClass] = useState(sample(classes))
  const [lockedIn, setLockedIn] = useState(false)

  const renderButtons = () => {
    if (lockedIn === false) {
      return (
        <div class="row justify-content-center gy-3">
          <div class="col-md-3 d-flex justify-content-center"> 
            <button class="btn transition-button" onClick={() => shuffleCharacter() }>
              { "I'm not feeling this one" }
            </button>
          </div>
          <div class="col-md-3 d-flex justify-content-center"> 
            <button class="btn transition-button" onClick={() => lockIn() }>
              { "Ok, sure." }
            </button>
          </div>
        </div>
      )
    } else {
      return null;
    }
  }

  return (
    <div class="container-fluid">
      <div class='row character m-4'>
        <Character 
          characterAlignment={characterAlignment}
          characterRace={characterRace} 
          characterClass={characterClass}
        />
      </div>
      { renderButtons() }
      <div class='row'>
        <Roller visible={lockedIn} />
      </div>
    </div>
  )
}

export default Wizard;
