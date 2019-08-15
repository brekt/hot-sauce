import React, { useState } from 'react';
import Button from './Button';

function Heat(props) {

    let [heatIndex, setHeatIndex] = useState(60);

    function handleClick(adjustment) {
        let newHeatIndex = heatIndex + adjustment;
        if (newHeatIndex < 0) {
            newHeatIndex = 0
        } else if (newHeatIndex > 120) {
            newHeatIndex = 120;
        }
        setHeatIndex(newHeatIndex);
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
                    handleClick={() => { handleClick(10); }}
                />
                <Button
                    text='HOTTER'
                    color='hsl(0, 100%, 50%)'
                    handleClick={() => { handleClick(-10); }}
                />
            </div>
        </div>
    );
}

export default Heat;
