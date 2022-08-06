import React from 'react'
import "./Login.css"
import logo from "../../assets/logos/Spotify_Logo_CMYK_White.png"
import { loginUrl } from '../spotify';

function Login() {
    return (
        <div className="login">
            <img src={logo} alt="logo"/>
            <a href={loginUrl}> LOGIN WITH SPOTIFY</a>
        </div>

    )
}

export default Login;

