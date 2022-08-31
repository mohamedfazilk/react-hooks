import React from 'react'
import './AnimalCard.css'

const AnimalCard = (props) => {
    const {name} = props
  return (
    <div>
      <h2>  {name}</h2>
    </div>
  )
}

export default AnimalCard

