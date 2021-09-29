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
        <div class='flex-center'>
          <button onClick={() => shuffleCharacter() }>
            { "I'm not feeling this one" }
          </button>
          <button onClick={() => lockIn() }>
            { "Ok, sure." }
          </button>
        </div>
      )
    } else {
      return null;
    }
  }

  return (
    <div>
      <div class='flex-center min-height-30 character'>
        <Character 
          characterAlignment={characterAlignment}
          characterRace={characterRace} 
          characterClass={characterClass}
        />
      </div>
      { renderButtons() }
      <div class='flex-center'>
        <Roller lockedIn={lockedIn} />
      </div>
    </div>
  )
}

export default Wizard;
