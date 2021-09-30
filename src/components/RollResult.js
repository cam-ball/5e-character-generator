import React from 'react'

const RollResult = (props) => {
  const { rollResult } = props;

  const square = (val) => {
    return(
      <div class="col-4 col-md d-flex justify-content-center gy-3">
        <div class="roll-result text-center">
          { val }
        </div>
      </div>
    )
  }

  return (
    <div class="col d-flex justify-content-center">
      <div class="row">
        {square(rollResult[0])}
        {square(rollResult[1])}
        {square(rollResult[2])}
        {square(rollResult[3])}
        {square(rollResult[4])}
        {square(rollResult[5])}
      </div>
    </div>
  )
}

export default RollResult;
