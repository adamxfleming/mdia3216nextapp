import React from 'react';
import styled from 'styled-components';

const SignupBox = styled.div`
    
    button {
        width:200px;
        height:30px;
        border: none;
        border-radius: 2px;
        background-color:#FA8072;
        color:#FFF;
        cursor:pointer;
        &:hover{
            background-color:#FFC6B6;
        }
    }
`;

const SignupSelect = styled.div`
    display: flex;
    flex-direction:column;
    margin:20px 0;
    input {
        background-color:#EBECF0;
        border:none;
        height: 25px;
        width:200px;
        border-radius: 2px;
    }
    p {
        margin:0;
        text-transform:uppercase;
        font-size:12px;
        color:#808080
    }
`;

const Signup = () =>{
    return <SignupBox>
        <h1>Signup For an Account</h1>
        <div>
            <SignupSelect>
                <p>Email</p>
                <input type='text' className='option1'></input>
            </SignupSelect>
            <SignupSelect>
                <p>Password</p>
                <input type='text' className='option2'></input>
            </SignupSelect>
            <SignupSelect>
                <p>Confirm Password</p>
                <input type='text' className='option3'></input>
            </SignupSelect>
            <SignupSelect>
            <button>Signup</button>
            </SignupSelect>
        </div>
    </SignupBox>
}

const TaskbarBox = styled.div`

`;

const Taskbar = () =>{
    return <TaskbarBox>

    </TaskbarBox>
}

Signup.defaultProps = {

}

export default Signup;
