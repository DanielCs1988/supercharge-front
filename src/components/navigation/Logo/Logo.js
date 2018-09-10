import React from 'react';
import './Logo.css';
import logo from '../../../assets/supercharge-logo.svg';

const Logo = () => (
    <div className="logo">
        <img src={logo} alt="Supercharge Logo" />
    </div>
);

export default Logo;