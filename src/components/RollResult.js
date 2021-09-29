import React from 'react'

const RollResult = (props) => {
  const { rollResult } = props;

  const square = (val) => {
    return(
      <div class="roll-result">
        { val }
      </div>
    )
  }

  return (
    <div>
      {square(rollResult[0])}
      {square(rollResult[1])}
      {square(rollResult[2])}
      {square(rollResult[3])}
      {square(rollResult[4])}
      {square(rollResult[5])}
    </div>
  )
}

export default RollResult;
