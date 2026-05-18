import React from 'react'
import Attribute from './Attribute'

const Character = (props) => {
  const { characterAlignment, characterRace, characterClass } = props;

  return (
    <div class='col text-center'>
      You should build a <Attribute attribute={characterAlignment} />  <Attribute attribute={characterRace} /> <Attribute attribute={characterClass} />!
    </div>
  )
}

export default Character;
