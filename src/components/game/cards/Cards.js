import React from 'react';
import { connect } from 'react-redux';
import Card from "./card/Card";
import {cardClicked} from "../../../store/actions";
import './Cards.css';

const Cards = ({ cards, cardClicked }) => {
    const cardComponents = cards.map(card => (
        <Card key={card.id} {...card} clicked={() => cardClicked(card.id)} />
    ));
    return (
        <div className="cards">
            {cardComponents}
        </div>
    );
};

const mapStateToProps = ({ cards }) => ({ cards });

const mapDispatchToProps = dispatch => ({
    cardClicked: cardId => dispatch(cardClicked(cardId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cards);