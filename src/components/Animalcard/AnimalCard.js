import React from 'react'
import PropTypes from 'prop-types';
import AnimalDetails from '../AnimalDetails';
import './AnimalCard.css'
import Card from '../Card/Card';



const AnimalCard = ({ name, size, ...props }) => {

    return (
        
            <Card title="Animal"
            detail={<AnimalDetails
                {...props}
            />}  >
                
                <h3>{name}</h3>
                <div>{size}kg</div>
            </Card>

      
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

