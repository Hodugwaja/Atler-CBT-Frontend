import React from 'react';
import styled from 'styled-components';
/*
background-position: top;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    */
    const HeaderBlock = styled.div`
        position: -webkit-sticky;
        position: sticky;
    width : 100%;
    height: 89px;
    background: white;
`;

const Content = styled.div`
   
    font-family : Blanka;
    .logo{
        top: 10px;
        left: 64px;
        width: 274px;
        height: 59px;
        text-align: left;
        font: normal normal normal 49px/59px Blanka;
        color: #000000;
        opacity: 1;
    }
    .langauage{
        top: 10px;
        left: 1396px;
        width: 52px;
        height: 52px;
        text-align: center;
        color: #000000;
        opacity: 1;
    }
    .theme{
        top: 19px;
        left: 1501px;
        width: 51px;
        height: 49px;
        background: #000000 0% 0% no-repeat padding-box;
        border: 1px solid #707070;
        opacity: 1;
        border-radius : 100%;   
    }
    .signin{
        top: 28px;
        left: 1546px;
        width: 88px;
        height: 30px;
        text-align: left;
        font: normal normal normal 25px/30px Blanka;
        letter-spacing: 0px;
        color: #000000;
        opacity: 1
    }
    .button{
        top: 16px;
        left: 1660px;
        width: 165px;
        height: 60px;
        background: #231020 0% 0% no-repeat padding-box;
        border-radius: 30px;
        opacity: 1;
    }
    .signup{
        top: 27px;
        left: 1698px;
        width: 92px;
        height: 30px;
        text-align: left;
        font: normal normal normal 25px/30px Blanka;
        letter-spacing: 0px;
        color: #FFFFFF;
        color : white;
        opacity: 1;
    }   
    
`


const header = () => {
    return(
        <>
            <HeaderBlock>
                <Content>
                    <div className = "logo">Atler-CBT</div>
                    <div className = "language">EN</div>
                    <div className = "theme"/>
                    <div className = "signin">Sign IN</div>
                    <div className = "button"><div ClassName = "SignUP">sign up</div></div>
                </Content>
            </HeaderBlock>
        </>
    )
}

export default header;