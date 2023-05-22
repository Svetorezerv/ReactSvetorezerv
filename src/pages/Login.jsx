import React, { useState } from 'react';
import AuthInput from '../components/UI/input/AuthInput'
import Button from '../components/UI/button/Button'
import AuthorisationService from '../API/AuthorisationService';
import "../styles/App.css";


const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className='login'>
            <div>Авторизация</div>
            <form action="/api/account/login/" method="POST">
                <AuthInput value={username} setValue={setUsername} type="text" placeholder="Введите username..." />
                <AuthInput value={password} setValue={setPassword} type="password" placeholder="Введите пароль..." />
                <Button type='submit' onClick={() => AuthorisationService.postLogin(username, password)}>Войти</Button>
            </form>
        </div>
    );
};

export default Login;