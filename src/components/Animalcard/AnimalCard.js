import React from 'react'
import './AnimalCard.css'
import PropTypes from 'prop-types';




const AnimalCard = ({
    
    diet,
    name,
    size
  
}) => {

    return (
        <div className='animal-wrapper'>
            <h2>  {name}</h2>
            <h3>{diet.join(', ')}.</h3>
            <h4>{size}kg</h4>
        </div>
    )
}

AnimalCard.propTypes = {
    
    diet: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    }

    AnimalCard.defaultProps = {
        additional: {
         notes: 'No Additional Information'
        }
        }

export default AnimalCard

