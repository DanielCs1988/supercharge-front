export const CARD_CLICKED = 'CARD_CLICKED';

export const cardClicked = (cardId) => ({
    type: CARD_CLICKED,
    cardId
});