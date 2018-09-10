import React from 'react';
import './Card.css';

const Card = ({ type, clicked }) => (
    <div className="card" onClick={clicked}>
        <img src={type} alt="Card Front" />
    </div>
);

export default Card;