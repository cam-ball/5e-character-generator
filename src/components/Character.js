import React from 'react'
import { useQuery, gql } from '@apollo/client';
import Race from './Race'

const Character = () => {
  const RACE_QUERY = gql`
    {
      races {
        name
      }
    }
  `;

  const sample = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  }

  const { data } = useQuery(RACE_QUERY);

  if (data) {
    const raceList = data.races
    const race = sample(raceList);

    return (
      <p>
        You should build a <Race race={race} />!!
      </p>
    )

  } else {
    return (
      <p>Crunchatizing</p>
    )
  }
}

export default Character;
