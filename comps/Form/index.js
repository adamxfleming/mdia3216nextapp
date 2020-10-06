import React from 'react';
import styled, {css} from 'styled-components';

const Forms = styled.div`
    width: 70px;
    height: 30px;
    display:flex;
    align-items: center;
    justify-content:center;
`;

const Buttons1 = styled.div`
    background-color:red;
`;

const Buttons2 = styled.div`
    background-color: yellow;
    border-radius:10px;
`;

const Buttons3 = styled.div`
    background-color: blue
    border-radius:10px;
`;


const Form = ({}) => {
    return <Forms>
    <Buttons1></Buttons1>
    <Buttons2></Buttons2>
    <Buttons3></Buttons3>
    </Forms>
}

Form.defaultProps = {
    
}

export default Form;