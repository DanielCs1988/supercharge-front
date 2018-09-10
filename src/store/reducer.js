import {CARD_CLICKED} from "./actions";
import {cards} from "./card.initializer";

const initialState = {
    cards,
    flippedCards: [],
    score: 0
};

const reducer = (state = initialState, action) => {
    if (action.type === CARD_CLICKED) {
        return {
            ...state,
            cards: state.cards.map(card => card.id === action.id ? {...card, flipped: !card.flipped} : card)
        }
    }
    return state;
};

export default reducer;