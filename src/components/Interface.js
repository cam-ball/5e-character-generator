import React, { useState } from 'react'
import Character from './Character'

const Interface = (props) => {
  const sample = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  }

  const shuffleCharacter = () => {
    setCharacterClass(sample(classes));
    setCharacterRace(sample(races));
    setCharacterAlignment(sample(alignments));
  }

  const { alignments, races, classes } = props.srdData;
  const [characterAlignment, setCharacterAlignment] = useState(sample(alignments))
  const [characterRace, setCharacterRace] = useState(sample(races))
  const [characterClass, setCharacterClass] = useState(sample(classes))


  return (
    <div>
      <div class='flex-center'>
        <Character 
          characterAlignment={characterAlignment}
          characterRace={characterRace} 
          characterClass={characterClass}
        />
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
