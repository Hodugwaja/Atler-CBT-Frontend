import React from 'react';
import Header from '../components/header/header'
import MainComponent from '../components/Main';
const Main = () => {
    return(
        <>
            <Header type = "unlogin"/>
            <MainComponent/>
        </>
    )
}

export default Main;