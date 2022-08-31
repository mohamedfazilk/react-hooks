import React from 'react'
import './AnimalCard.css'

const AnimalCard = ({
    additional,
    diet,
    name,
    scientificName,
    size
}) => {

    return (
        <div>
            <h2>  {name}</h2>
            <h3>{scientificName}</h3>
            <h4>{size}kg</h4>
            <div>{diet.join(', ')}.</div>

        </div>
    )
}

export default AnimalCard

