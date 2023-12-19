import styled from "styled-components"

export const Title = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: ${props => props.backgroundColor || '#FFF'};
    color: ${props => props.color || '#EB9B00'};
    font-size: ${props => props.size || '36px'};
    text-align: ${props => props.align || 'center'};
    margin: 0;  
`