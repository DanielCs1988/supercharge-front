import {CARD_CLICKED} from "./actions";
import {cards} from "./card.initializer";

const initialState = {
    cards,
    flippedCards: [],
    score: 0
};

const reducer = (state = initialState, action) => {
    if (action.type === CARD_CLICKED) {
        return flipCard(state, action);
    }
    return state;
};

const flipCard = (state, action) => {
    switch (state.flippedCards.length) {
        case 0:
            return {
                ...state,
                cards: state.cards.map(card => card.id === action.id ? {...card, flipped: true} : card),
                flippedCards: [action.id]
            };
        case 1:
            return {
                ...state,
                cards: state.cards.map(card => card.id === action.id ? {...card, flipped: true} : card),
                flippedCards: [...state.flippedCards, action.id]
            };
        case 2:
            const newCards = state.cards.map(card => {
                if (card.flipped) {
                    return {...card, flipped: false};
                }
                if (card.id === action.id) {
                    return {...card, flipped: true}
                }
                return card;
            });
            return {
                ...state,
                cards: newCards,
                flippedCards: [action.id]
            };
        default:
            return state;
    }
};

export default reducer;