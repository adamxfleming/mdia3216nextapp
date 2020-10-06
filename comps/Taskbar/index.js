import React from 'react';
import styled from 'styled-components';

const TaskbarBox = styled.div`
    
`;

const TaskbarTop = styled.div`
    min-width: 100%;
    background-color: #DDD;
    display:flex;
    padding:5px 10px;
    align-items:center;
    div{
        display:flex;
        align-items: center;
        margin:10px;
    }
`;

const TaskbarRight = styled.div`
    display:flex;
    text-align:right;
`;


const Taskbar = () =>{
    return <TaskbarBox>
        <TaskbarTop>
            <div><img src='logo.png' /></div>
            <div><img src='home.png' />Menu 1</div>
            <div><img src='help.png' />Menu 2</div>
            <TaskbarRight>
                <div><img src='search.png' /></div>
                <div><img src='bell.png' /></div>
                <div><img src='avatar.png' /></div>
            </TaskbarRight>
        </TaskbarTop>
    </TaskbarBox>
}

Taskbar.defaultProps = {

}

export default Taskbar;