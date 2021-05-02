import React from 'react'
import { useQuery, gql } from '@apollo/client';
import Attribute from './Attribute'

const Character = () => {
  const RACE_QUERY = gql`
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

  const { data } = useQuery(RACE_QUERY);

  if (data) {
    const { races, classes } = data
    const randomRace = sample(races);
    const randomClass = sample(classes);

    return (
      <p>
        You should build a <Attribute attribute={randomRace} /> <Attribute attribute={randomClass} />!
      </p>
    )

  } else {
    return (
      <p>Crunchatizing</p>
    )
  }
}

export default Character;
