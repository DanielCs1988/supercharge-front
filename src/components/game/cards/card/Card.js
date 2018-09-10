import React from 'react';
import './Card.css';

const Card = ({ type, flipped, active, clicked }) => (
    <div className={active ? 'card' : 'card inactive'} onClick={active ? clicked : null}>
        {
            flipped ?
                <img src={type} alt="Card Front" /> :
                <div className="card-back" />
        }
    </div>
);

export default Card;