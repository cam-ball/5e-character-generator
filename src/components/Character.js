import React, { Component } from 'react'
import Race from './Race'

class Character extends Component {
  render() {
    const race = this.randomRace();

    return (
      <p>
        You should build a <Race race={race} />!!
      </p>
    )
  }

  sample(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  randomRace() {
    const races = [ 
      { name: 'Human' },
      { name: 'Halfing' },
      { name: 'Dwarf' },
    ]

    return this.sample(races);
  }
}

export default Character;
