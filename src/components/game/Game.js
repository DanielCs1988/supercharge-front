import React from 'react';
import { connect } from 'react-redux';
import Cards from "./cards/Cards";
import './Game.css';
import Victory from "./victory/Victory";

const Game = ({ score, steps }) => (
    <div className="game">
        {
            score < 10 ?
                <Cards /> :
                <Victory steps={steps} />
        }
    </div>
);

const mapStateToProps = ({ score, steps }) => ({ score, steps });

export default connect(
    mapStateToProps
)(Game);