import React from 'react'

let Definitions = (props) => {
  if (props.toDisplay === 'Definitions go here'){
  return (
    <p>Definitions go here</p>
  )}
  else return (
    <p>{JSON.stringify(props.toDisplay)}</p>
  )
}

export default Definitions
