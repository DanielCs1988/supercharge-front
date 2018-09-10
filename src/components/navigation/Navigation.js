import React from 'react';
import Logo from "./Logo/Logo";
import './Navigation.css';

const Navigation = () => (
    <div className="navbar">
        <Logo />
        <span>MEMORY GAME</span>
    </div>
);

export default Navigation;