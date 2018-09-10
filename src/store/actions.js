export const CARD_CLICKED = 'CARD_CLICKED';
export const RESTART_GAME = 'RESTART_GAME';

export const cardClicked = (id, cardType) => ({
    type: CARD_CLICKED,
    id, cardType
});

export const restartGame = () => ({ type: RESTART_GAME });