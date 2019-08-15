import React from 'react';

function Button(props) {
    return(
        <button
            style={{ backgroundColor: props.color }}
            onClick={props.handleClick}
        >
            {props.text}
        </button>
    );
}

export default Button;