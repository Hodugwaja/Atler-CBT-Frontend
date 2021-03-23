import React from 'react';
import styled from 'styled-components';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

const Background = styled.div`
    position: absolute;
    left: 0;
    top: 89px;
    bottom: 0;
    right: 0;
    background-image: url('https://imgur.com/qNTbyLo.png');
    background-color : rgba(0, 0, 0, 0.25);
    
    background-size : cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    text-align : center;
    background-repeat : no-repeat;
`;
const Login = styled.div` 
    position: absolute;
    top:50%;
    left : 0%;
    transform: translate(15%, -50%);
    width: 80%;
    background-size : cover;
    background-color : rgba(0, 0, 0, 0.5);
    border-radius : 2px;
    text-decoration: none;
    text-align : center;
    .title{
        text-align : center;
        display : block;
        padding-bottom : 2rem;
        text-align : center;
        letter-spacing : 2px;
        text-decoration: none;
		white-space: nowrap;
		text-align: center;
		font-family: Blanka;
		font-style: normal;
		font-weight: normal;
		font-size: 80px;
		color: rgba(255,255,255,1);
    }
    .id{
        width: 193px;
		white-space: nowrap;
		text-align: right;
		font-family: Blanka;
		font-style: normal;
		font-weight: normal;
		font-size: 36px;
		color: rgba(255,255,255,1);
    }
    .password{
        width: 193px;
		white-space: nowrap;
		text-align: right;
		font-family: Blanka;
		font-style: normal;
		font-weight: normal;
		font-size: 36px;
		color: rgba(255,255,255,1);

    }
    .input{
        left : 50%;
        padding: 5px 10px;
            width: 370px;
            height: 40px;
            background-color: inherit;
            border: 1px solid white;
            border-radius: 5px;
            color: white;
            margin-top : 3%;
            font-size: 20px;
            width: 591px;
		    height: 83px;
            margin-left : 100px;
            border: 3px solid #FFFFFF;
            border-radius: 26px;
            opacity: 1;
            text-align : left;
    }
    .forgotpassword{

    }
    .register-button{

    }
    .login-button{
        position: absolute;
		overflow: visible;
		width: 216px;
		height: 88px;
		left: 0px;
		top: 0px;
    }
`;
const Register = styled.div`

`;
const FindPassword = styled.div``;
const Mypage  = styled.div``;

const UserBackground = ({type}) => {
    return(
        <Background>
            
            <div>
                {type === 'login' && (
                    <Login>
                        <div className = "title">Login</div>
                        <div>
                            <span className = "id">ID</span>
                            <input className = "input"/>
                        </div>
                        <div>
                            <span className = "password">password</span>
                            <input className = "input"/>
                        </div>
                        <Link to = "/" className = "login-button">
                            <span>Login</span>
                        </Link>
                    </Login>
                )}
                {type === "register" && (<Register></Register>)}
                {type === 'findpassword' && (<FindPassword></FindPassword>)}
                {type === "mypage" && (<Mypage></Mypage>)}
            </div>
        </Background>
    )
}

export default UserBackground