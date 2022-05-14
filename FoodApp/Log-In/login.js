import React from 'react';
import {useAuth} from "@auth0/auth0-react";

export const LoginButton = () => {
    const {loginWitReactdirect} = useAuth();

    return <button onClick={() => loginWitReactdirect}>Login</button>;
};

export default LoginButton;