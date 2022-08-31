import React from 'react';
import PropTypes from 'prop-types';
import './AnimalDetails.css';

function convertFood(food) {
    switch(food) {
     case 'insects':
     return '🐜';
     case 'meat':
     return '🍖';
     case 'plants':
     default:
     return '🌱';
     }
    }
    