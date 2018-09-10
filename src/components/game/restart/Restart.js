import React from 'react';
import './Restart.css';

const Restart = ({ clicked }) => (
    <div className="button-wrapper">
        <button onClick={clicked}>RESTART</button>
    </div>
);

export default Restart;