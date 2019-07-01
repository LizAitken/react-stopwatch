import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`   
    margin: 0 4px;
    width: 4rem;
    border-radius: 50%;
    border: solid 1px rebeccapurple;
    padding: 1rem;
`;

const Button = props => {
    const { clickHandler, name } = props;
    return <StyledButton onClick={clickHandler}>{name}</StyledButton>;
};

export default Button