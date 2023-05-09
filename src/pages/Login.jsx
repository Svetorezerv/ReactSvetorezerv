import React, { useContext } from 'react';
import Input from '../components/UI/input/Input'
import Button from '../components/UI/button/Button'
import { AuthorizationContext } from '../context';


const Login = () => {
    const { isAuthorization, setIsAuthorization } = useContext(AuthorizationContext);
    const login = event => {
        event.preventDefault();
        setIsAuthorization(true);
        localStorage.setItem('authorization', 'true');
    }

    return (
        <div>
            <h1>Страница для логина</h1>
            <form onSubmit={login}>
                <Input type="text" placeholder='Введите логин' />
                <Input type="password" placeholder='Введите пароль' />
                <Button>Войти</Button>
            </form>
        </div>
    );
};

export default Login;