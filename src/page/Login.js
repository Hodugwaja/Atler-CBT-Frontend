import React from 'react';
import Header from '../components/header/header';
import Page from '../components/userBackground';
const Login = () => {
    return(
        <>
            <Header type = "user-unlogin"></Header>
            <Page type = "login"></Page>
            
        </>
    )
}

export default Login;