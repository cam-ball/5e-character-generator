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
      <Character characterRace={characterRace} characterClass={characterClass}/>
      <button onClick={() => shuffleCharacter() }>
        { "I'm not feeling this one" }
      </button>
    </div>
  )
}

export default Interface;
