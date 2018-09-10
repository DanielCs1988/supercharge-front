import React from 'react';
import { connect } from 'react-redux';
import Cards from "./cards/Cards";
import './Game.css';
import Victory from "./victory/Victory";
import Score from "./score/Score";
import Restart from "./restart/Restart";
import {restartGame} from "../../store/actions";

const Game = ({ score, steps, restart }) => (
    <div className="game">
        <Score steps={steps} />
        <Restart clicked={restart} />
        {
            score < 10 ?
                <Cards /> :
                <Victory steps={steps} />
        }
    </div>
);

const mapDispatchToProps = dispatch => ({
    restart: () => dispatch(restartGame())
});

const mapStateToProps = ({ score, steps }) => ({ score, steps });

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Game);