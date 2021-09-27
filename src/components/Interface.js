import React from 'react'
import Character from './Character'

const Interface = (props) => {
  const sample = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  }

  const { classes, races } = props.srdData;

  return (
    <Character characterRace={sample(races)} characterClass={sample(classes)}/>
  )
}

export default Interface;
