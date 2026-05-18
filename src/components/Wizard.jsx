import React, { useState } from 'react'
import Character from './Character'

const Wizard = (props) => {
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
    <div class="container-fluid">
      <div class='row character m-4'>
        <Character 
          characterAlignment={characterAlignment}
          characterRace={characterRace} 
          characterClass={characterClass}
        />
      </div>
      <div class="row justify-content-center gy-3">
        <div class="col-md-3 d-flex justify-content-center"> 
          <button class="btn transition-button" onClick={() => shuffleCharacter() }>
            { "I'm not feeling this one" }
          </button>
        </div>
      </div>
    </div>
  )
}

export default Wizard;
