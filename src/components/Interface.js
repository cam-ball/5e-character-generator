import React, { useState } from 'react'
import Character from './Character'

const Interface = (props) => {
  const sample = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  }

  const shuffleCharacter = () => {
    setCharacterClass(sample(classes));
    setCharacterRace(sample(races));
  }

  const { classes, races } = props.srdData;
  const [characterClass, setCharacterClass] = useState(sample(classes))
  const [characterRace, setCharacterRace] = useState(sample(races))


  return (
    <div>
      <div class='flex-center'>
        <Character characterRace={characterRace} characterClass={characterClass}/>
      </div>
      <div class='flex-center'>
        <button onClick={() => shuffleCharacter() }>
          { "I'm not feeling this one" }
        </button>
      </div>
    </div>
  )
}

export default Interface;
