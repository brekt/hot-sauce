import React from 'react';
import Button from './Button';
import actions from '../state/actions';

function Heat({ heatIndex, dispatch }) {

    function handleClick(type) {
        dispatch(type);
    }

    return(
        <div>
            <div
                style={{
                    color: `hsl(${heatIndex}, 100%, 50%)`,
                    fontSize: '200px'
                }}
            >
                Heat
            </div>
            <div>
                <Button
                    text='MILDER'
                    color='hsl(120, 100%, 50%)'
                    handleClick={() => handleClick({ type: actions.DECREASE_HEAT })}
                />
                <Button
                    text='HOTTER'
                    color='hsl(0, 100%, 50%)'
                    handleClick={() => handleClick({ type: actions.INCREASE_HEAT })}
                />
            </div>
        </div>
    );
}

export default Heat;
