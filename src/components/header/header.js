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
    position: absolute;
    overflow: visible;
    width: 1920px;
    height: 89px;
    left: 0px;
    top: 0px;
    
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
        left: 1364px;
		top: 13px;
		position: absolute;
		overflow: visible;
		width: 53px;
		white-space: nowrap;
		text-align: left;
		font-family: Blanka;
		font-style: normal;
		font-weight: normal;
		font-size: 43px;
		color: rgba(0,0,0,1);
    }
    .theme{
        fill: rgba(0,0,0,1);
		stroke: rgba(112,112,112,1);
		stroke-width: 1px;
		stroke-linejoin: miter;
		stroke-linecap: butt;
		stroke-miterlimit: 4;
		shape-rendering: auto; 
        position: absolute;
		overflow: visible;
		width: 51px;
		height: 49px;
		left: 1469px;
		top: 22px;
    }
    .signin{
        left: 1546px;
		top: 28px;
		position: absolute;
		overflow: visible;
		width: 89px;
		white-space: nowrap;
		--web-animation: fadein 0.3s ease-out;
		--web-action-type: page;
		--web-action-target: ___.html;
		cursor: pointer;
		text-align: left;
		font-family: Blanka;
		font-style: normal;
		font-weight: normal;
		font-size: 25px;
		color: rgba(0,0,0,1);
    }
    .Signup-button{
        position: absolute;
		width: 165px;
		height: 60px;
		left: 1660px;
		top: 16px;
		overflow: visible;
		--web-animation: fadein 0.3s ease-out;
		--web-action-type: page;
		cursor: pointer;
        fill: rgba(35,16,32,1);
        
    }
    .signup{
        left: 38px;
		top: 11px;
		position: absolute;
		overflow: visible;
		width: 93px;
		white-space: nowrap;
		text-align: left;
		font-family: Blanka;
		font-style: normal;
		font-weight: normal;
		font-size: 25px;
		color: rgba(255,255,255,1);
        
    }   
    
    
`


const header = () => {
    return(
        <>
            <HeaderBlock>
                <Content>
                    <div className = "logo">Atler-CBT</div>
                    <div className = "language">
                        <span>EN</span>
                    </div>
                    <svg className = "theme"><ellipse id="_2" rx="25.5" ry="24.5" cx="25.5" cy="24.5">
					</ellipse></svg>
                    <div className = "signin">Sign IN</div>
                    <svg className = "Signup-button">
                        <rect id="_5" rx="30" ry="30" x="0" y="0" width="165" height="60"></rect>
                    </svg>    
                    <div ClassName = "SignUP">sign up</div>
                    
                </Content>  
            </HeaderBlock>
        </>
    )
}

export default header;