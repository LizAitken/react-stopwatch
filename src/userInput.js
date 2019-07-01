import React from 'react';
import styled from 'styled-components';

const StyleInput = styled.input`   
    margin: 0 4px;
    border-radius: 4px;
    width: 10rem;
    border: solid 1px rebeccapurple;
    padding: 1rem;
`;

const InputForm = props => {
    const { initalValue, handleChange } = props;
    return <StyleInput value={ initalValue } onChange={ handleChange } type='text' placeholder='How many seconds?'/>;
};

export default InputForm;