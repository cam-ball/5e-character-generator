import React from 'react'

const Attribute = (props) => {
  const { attribute } = props;

  return (
    <span>{attribute.name}</span>
  )
}

export default Attribute;
