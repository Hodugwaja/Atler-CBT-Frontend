import {  createGlobalStyle } from "styled-components";

import blankaWoff from './blanka.woff';
import blankaWoff2 from './blanka.woff2';

export default createGlobalStyle`
    @font-face {
        @font-face {
            font-family: "Blanka";
            url(${blankaWoff2}) format("woff2"), 
            url(${blankaWoff}) format("woff");  
        } 
    }   
  
`;