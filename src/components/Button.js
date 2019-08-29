import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: ${props => props.backgroundColor }
`;

function Button(props) {
    return(
        <StyledButton
            backgroundColor={props.color}
            onClick={props.handleClick}
        >
            {props.text}
        </StyledButton>
    );
}

export default Button;