import angular from '../assets/card-images/angular.png';
import d3 from '../assets/card-images/d3.png';
import jenkins from '../assets/card-images/jenkins.png';
import postcss from '../assets/card-images/postcss.png';
import react from '../assets/card-images/react.png';
import redux from '../assets/card-images/redux.png';
import sass from '../assets/card-images/sass.png';
import supercharge from '../assets/card-images/supercharge.png';
import ts from '../assets/card-images/ts.png';
import webpack from '../assets/card-images/webpack.png';

// https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const logos = [angular, d3, jenkins, postcss, react, redux, sass, supercharge, ts, webpack];
const randomLogos = shuffle([...logos, ...logos]);

export const cards = Array(20).fill().map((_, i) => ({
    id: i,
    flipped: false,
    active: true,
    type: randomLogos[i]
}));