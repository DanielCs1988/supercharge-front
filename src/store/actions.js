export const CARD_CLICKED = 'CARD_CLICKED';

export const cardClicked = (id, cardType) => ({
    type: CARD_CLICKED,
    id, cardType
});