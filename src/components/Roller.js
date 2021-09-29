import React, { useState } from 'react'
import RollResult from './RollResult'

const Roller = (props) => {
  const STANDARD_ARRAY = [
    8,
    10,
    12,
    13,
    14,
    15
  ]

  const { visible } = props
  const [rollMethod, setRollMethod] = useState(null)
  const [rollResult, setRollResult] = useState(STANDARD_ARRAY)

  const rollD6 = () => {
    return Math.ceil(Math.random() * 6);
  }

  const rollManual = () => {
    let manualRolls = []
    // 6 iterations, once for each ability score
    for(let i = 0; i < 6; i++) {
      // generate 4 rolls and sort in numerical order
      let rolls = [rollD6(), rollD6(), rollD6(), rollD6()].sort()
      // remove the first element (drop the lowest)
      rolls.shift()
      // add together
      const score = rolls.reduce((a, b) => a + b, 0)
      manualRolls.push(score)
    }

    return manualRolls.sort((a, b) => (a - b))
  }

  const handleUpdate = (event) => {
    setRollMethod(event.target.value)
    if (event.target.value === 'Standard Array') {
      setRollResult(STANDARD_ARRAY)
    } else {
      setRollResult(rollManual())
    }
  }

  const displayRollType = () => {
    if (rollMethod) {
      return (
        <div>
          <h2> Rolling with { rollMethod }:</h2>
          <div class="flex-center">
            <RollResult rollResult={ rollResult } />
          </div>
        </div>
      )
    } else {
      return null;
    }
  }

  if(visible === true) {
    return (
      <div>
        <div value={rollMethod} onChange={(event) => handleUpdate(event)}>
          <label>
            <input 
              type="radio" 
              value="Standard Array" 
              name="rollmethod"
            />
            Standard Array
          </label>
          <label>
            <input 
              type="radio" 
              value="Manual" 
              name="rollmethod"
            />
            Manual
          </label>
        </div>
        { displayRollType() }
      </div>
    )
  } else {
    return null;
  }
}

export default Roller;
