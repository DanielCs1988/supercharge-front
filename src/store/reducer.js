import {CARD_CLICKED} from "./actions";
import {cards} from "./card.initializer";

const initialState = {
    cards,
    flippedCards: [],
    score: 0,
    steps: 0
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
                flippedCards: [{ id: action.id, type: action.cardType }],
                steps: state.steps + 1
            };
        case 1:
            return checkIfPair(state, action);
        case 2:
            const newCards = state.cards.map(card => {
                if (card.active && card.flipped) {
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
                flippedCards: [{ id: action.id, type: action.cardType }],
                steps: state.steps + 1
            };
        default:
            return state;
    }
};

const checkIfPair = (state, action) => {
    if (state.flippedCards[0].type === action.cardType) {
        return {
            ...state,
            cards: state.cards.map(card => {
                if (card.id === action.id) {
                    return {...card, flipped: true, active: false};
                }
                if (card.id === state.flippedCards[0].id) {
                    return {...card, active: false};
                }
                return card;
            }),
            flippedCards: [],
            score: state.score + 1,
            steps: state.steps + 1
        }
    }
    return {
        ...state,
        cards: state.cards.map(card => card.id === action.id ? {...card, flipped: true} : card),
        flippedCards: [...state.flippedCards, { id: action.id, type: action.cardType }],
        steps: state.steps + 1
    };
};

export default reducer;