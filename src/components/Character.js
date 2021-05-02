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
  const { loading, data } = useQuery(RACE_QUERY);
  if (loading) { return <div> crunchatizing </div>}

  const raceList = data.races
  const race = raceList[Math.floor(Math.random() * raceList.length)];

  return (
    <p>
      You should build a <Race race={race} />!!
    </p>
  )
}

export default Character;
