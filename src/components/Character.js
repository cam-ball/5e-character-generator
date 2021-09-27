import React from 'react'
import Attribute from './Attribute'

const Character = (props) => {
  const { characterAlignment, characterRace, characterClass } = props;

  return (
    <p>
      You should build a <Attribute attribute={characterAlignment} />  <Attribute attribute={characterRace} /> <Attribute attribute={characterClass} />!
    </p>
  )
}

export default Character;
