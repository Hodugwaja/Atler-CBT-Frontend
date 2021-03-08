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
    position: sticky;
    width : 100%;
    height: 89px;
    background: white;
`;

const Content = styled.div`
   
    font-family : Blanka;
    position: absolute;
    overflow: visible;
    width: 100%;
    height: 89px;
    left: 0px;
    top: 0px;
    
    .logo{
        left: 10%;
        top: 12px;
        
        width: 274px;
        height: 59px;
        text-align: left;
        font: normal normal normal 49px/59px Blanka;
        color: #000000;
        opacity: 1;
    }
    .langauage{
        left: 72.5%;
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
		width: 50px;
		height: 50px;
		left: 76.5%;
		top: 22px;
    }
    .signin{
        left: 80.4%;
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
        top: 16px;
        left: 86.5%;
        width: 165px;
        height: 60px;
        position: absolute;
		overflow: visible;
        background: #231020 0% 0% no-repeat padding-box;
        border-radius: 30px;
        opacity: 1;
        
    }
    .signup{
        left : 20%;
		top: 15%;
		position: absolute;
		overflow: visible;
		width: 93px;
		white-space: nowrap;
        text-align : center;
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
                    <div className = "langauage">
                        <span>EN</span>
                    </div>
                    <svg className = "theme"><ellipse id="_2" rx="25.5" ry="24.5" cx="25.5" cy="24.5">
					</ellipse></svg>
                    <span className = "signin">Sign IN</span>
                    <div className = "Signup-button">
                        <div className = "signup">sign up</div>
                    </div>    
                    
                    
                </Content>  
            </HeaderBlock>
        </>
    )
}

export default header;