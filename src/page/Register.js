import React from 'react';
import Header from '../components/header/header'
import RegisterComp from '../components/userBackground'
const Register = () => {
    return(
        <>
            <Header type = "user-unlogin"/>
            <RegisterComp type = "register"/>
        </>
    )
}

export default Register