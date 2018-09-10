import React from 'react';

const Victory = ({ steps }) => (
    <h1 style={
        {
            textAlign: 'center',
            marginTop: '72px'
        }
    }>
        Congratulations, you have won the game! Steps taken: {steps}
    </h1>
);

export default Victory;