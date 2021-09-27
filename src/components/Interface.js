import React from 'react'
import { useQuery, gql } from '@apollo/client';
import Character from './Character'

const Interface = () => {
  const SRD_QUERY = gql`
    {
      races {
        name
      }
      classes {
        name
      }
    }
  `;

  const sample = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  }

  const { data } = useQuery(SRD_QUERY);

  if (data) {
    const { races, classes } = data
    const randomRace = sample(races);
    const randomClass = sample(classes);

    return (
      <Character characterRace={randomRace} characterClass={randomClass}/>
    )

  } else {
    return (
      <p>Crunchatizing</p>
    )
  }
}

export default Interface;
