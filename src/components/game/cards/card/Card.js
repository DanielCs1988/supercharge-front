import React from 'react';
import './Card.css';

const Card = ({ type, flipped, active, clicked }) => (
    <div className={ flipped ? 'flip-container flipped' : 'flip-container' }
         onClick={ !flipped && active ? clicked : null }
    >
        <div className="flipper">
            <div className={ active ? 'front' : 'front inactive' } >
                <img src={type} alt={type} />
            </div>
            <div className="back" />
        </div>
    </div>
);

export default Card;