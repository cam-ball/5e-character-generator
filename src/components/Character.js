import React from 'react'
import Attribute from './Attribute'

const Character = (props) => {
  const { characterAlignment, characterRace, characterClass } = props;

  return (
    <p>
      You should build a&nbsp; 
      <Attribute attribute={characterAlignment} />&nbsp; 
      <Attribute attribute={characterRace} />&nbsp;
      <Attribute attribute={characterClass} />
    !
    </p>
  )
}

export default Character;
