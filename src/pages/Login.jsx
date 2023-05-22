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
            <div>
                <AuthInput value={username} setValue={setUsername} type="text" placeholder="Введите username..." />
                <AuthInput value={password} setValue={setPassword} type="password" placeholder="Введите пароль..." />
                <Button onClick={async () => console.log(await AuthorisationService.postLogin(username, password))}>Войти</Button>
            </div>
        </div>
    );
};

export default Login;