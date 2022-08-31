import React from 'react'
import './AnimalCard.css'
import PropTypes from 'prop-types';


const AnimalCard = ({
    additional,
    diet,
    name,
    scientificName,
    size,
    showAdditional
}) => {

    return (
        <div className='animal-wrapper'>
            <h2>  {name}</h2>
            <h3>{scientificName}</h3>
            <h4>{size}kg</h4>
           
            <div>{diet.join(', ')}.</div>
            <button onClick={() => showAdditional(additional)}>More Info</button>

        </div>
    )
}

export default AnimalCard

