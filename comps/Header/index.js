import React from 'react';
import styled, {css} from 'styled-components';

const HeadTitle = styled.h1`
    font-size:18px;
    color:${props=>props.color ? props.color : '#FFF'};
    padding:5px;
    ${props=>props.highlight === true && css`
        background-color:#F5A;
        margin:10px;
    `}
`;

const SubHeadTitle = styled(HeadTitle)`
    font-size: 14px;
    padding:3px;
`;

const HeadBox = styled.div`
    background-color:#333;
    display:flex;
    align-items: center;
    justify-content:center;
`;

const Header = ({color, highlight}) => {
    return <HeadBox>
    <SubHeadTitle color={color}>Name:</SubHeadTitle>
    <HeadTitle highlight={highlight}>Adam</HeadTitle>
    </HeadBox>
}

Header.defaultProps = {
    color:null,
    highlight:null
}

export default Header;