import React from 'react';
import styled from 'styled-components';

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
    width : 100%;
    height : 100%;  
    background-color : rgba(0, 0, 0, 0.5);
    border-radius : 2px;
    text-decoration: none;
    .title{
        left: 603px;
		top: 11px;
		position: absolute;
		overflow: visible;
		width: 239px;
		white-space: nowrap;
		text-align: center;
		font-family: Blanka;
		font-style: normal;
		font-weight: normal;
		font-size: 80px;
		color: rgba(255,255,255,1);
    }
    .input{
        fill: transparent;
		stroke: rgba(255,255,255,1);
		stroke-width: 3px;
		stroke-linejoin: miter;
		stroke-linecap: butt;
		stroke-miterlimit: 4;
		shape-rendering: auto;
        position: absolute;
		overflow: visible;
		width: 591px;
		height: 83px;
		left: 634px;
		top: 339px;
    }
`;
const Register = styled.div``;
const FindPassword = styled.div``;
const Mypage  = styled.div``;

const UserBackground = ({type}) => {
    return(
        <Background>
            
            <div>
                {type === 'login' && (
                    <Login>
                        <div className = "title">Login</div>
                        <div className = "input"></div>
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