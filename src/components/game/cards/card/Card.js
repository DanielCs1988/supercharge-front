import React from 'react';
import './Card.css';

const Card = ({ type, flipped, clicked }) => (
    <div className="card" onClick={clicked}>
        {
            flipped ?
                <img src={type} alt="Card Front" /> :
                <div className="card-back" />
        }
    </div>
);

export default Card;