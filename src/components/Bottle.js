import React from 'react';
import styled from 'styled-components';
import mildImg from '../img/mild.png';
import mediumImg from '../img/medium.png';
import hotImg from '../img/hot.png';

const bottleImages = [mildImg, mediumImg, hotImg];
const StyledImage = styled.img`
    height: 300px;
`;

export default function Bottle(props) {
    return (
        <StyledImage
            alt='hot'
            src={getBottleImgSrc(props.heatIndex)}
        />
    );
}

function getBottleImgSrc(heatIndex) {
    let newHeatIndex = heatIndex;
    if (newHeatIndex < 40){
        return bottleImages[2];
    } else if (newHeatIndex < 80){
        return bottleImages[1];
    } else {
        return bottleImages[0];
    }
}
