import React from 'react'

const Race = (props) => {
  const { race } = props;
  console.log(race)

  return (
    <span>{race.name}</span>
  )
}

export default Race;
