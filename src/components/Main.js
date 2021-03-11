import React from 'react';
import styled from 'styled-components';

const Backgroundcolor = styled.svg`
    position: absolute;
    overflow: visible;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 89px;
    fill: rgba(41,41,41,1);
`;
const BackgroundImage = styled.div`
    position: absolute;
    top: 147px;
    left: 0px;
    width: 100%;
    height: 883px;
    background: transparent url('https://i.imgur.com/GnCiBPd.jpg') 0% 0% no-repeat padding-box;
    opacity: 1;
    .title{
        position : absolute;
        top: 150px;
        left: 36px;
        width: 680px;
        height: 288px;
        text-align: left;
        font: normal normal normal 80px/96px Blanka;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;
    }
    .try{
        position: absolute;
		width: 343px;
		height: 103px;
		left: 33px;
		top: 537px;
		overflow: visible;
		transition: all 1s ease-in-out;
		--web-animation: fadein 1s ease-in-out;
		--web-action-type: page;
		--web-action-target: ______3.html;
		cursor: pointer;
    }
    .try-text{
        left: 79px;
		top: 25px;  
		overflow: visible;
		width: 187px;
		white-space: nowrap;
		text-align: center;
		font-family: Blanka;
		font-style: normal;
		font-weight: normal;
		font-size: 30px;
		color: rgba(255,255,255,1);
    }
    .make{
        position: absolute;
		width: 343px;
		height: 103px;
		left: 33px; 
		top: 665px;
		overflow: visible;
		transition: all 1s ease-in-out;
		--web-animation: fadein 1s ease-in-out;
		--web-action-type: page;
		--web-action-target: ______3.html;
		cursor: pointer;
        fill: transparent;
		stroke: rgba(255,255,255,1);
		stroke-width: 5px;
		stroke-linejoin: miter;
		stroke-linecap: butt;
		stroke-miterlimit: 4;
		shape-rendering: auto;
    }
    .make-text{
        left: 79px; 
		top: 25px;  
		overflow: visible;
		width: 187px;
		white-space: nowrap;
		text-align: center;
		font-family: Blanka;
		font-style: normal;
		font-weight: normal;
		font-size: 30px;
		color: rgba(255,255,255,1);
    }
`;

const RecommandQuiz = styled.div`

`;
const Main = () => {
    return(
        <>
            <Backgroundcolor>
                <rect rx="0" ry="0" x="0" y="0" width="1920" height="995"></rect>
            </Backgroundcolor>
            <BackgroundImage>
                <div className = "title">Make a creative quiz with atler-quiz</div>
                <div className = "try">
                    <div className = "try-text">try a quiz</div>
                </div>
                <div className = "make">
                    <svg className = "make">
                        <ellipse className = "make" rx  ="51.5" ry="51.5" x="0" y="0" width="343" height="103"></ellipse>
                        
                    </svg>sdafsadf
                    <div className = "make-text">make a quiz</div>
                </div>    
            </BackgroundImage>
            <RecommandQuiz>
                <div className = "title"></div>
            </RecommandQuiz>  
            <div id="_3_ca" class="___3">
					<img id="_ca" src="_ca.png" srcset="_ca.png 1x, _ca@2x.png 2x">
						
					<img id="ID1200px-Unofficial_JavaScript_ca" src="ID1200px-Unofficial_JavaScript_ca.png" srcset="ID1200px-Unofficial_JavaScript_ca.png 1x, ID1200px-Unofficial_JavaScript_ca@2x.png 2x">
						
					<div id="JavaScript__ca">
						<span>JavaScript 퀴즈</span>
					</div>
					<div id="ID1972__cb">
						<span>1972명 도전</span>
					</div>
					<div id="__9870">
						<span>평균 점수 98.70%</span>
					</div>
				</div>
			</div>
        </>
    )
}

export default Main;