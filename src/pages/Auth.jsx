import React, { useContext, useState } from 'react';
import AuthInput from '../components/UI/input/AuthInput';
import Button from '../components/UI/button/Button';
import { NavLink, useLocation, useNavigate, redirect } from 'react-router-dom';
import { login, registration } from '../API/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '../App';

const Auth = observer(() => {
    const { user } = useContext(Context);
    const location = useLocation()
    const navigate = useNavigate();
    const isLogin = location.pathname === '/login';
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(username, password);
            } else {
                data = await registration(username, password);
            }
            user.setUser(user);
            user.setIsAuth(true);
            navigate('/');
        } catch (error) {
            console.log(error.response.data.detail)
        }
    }

    return (
        <div className='login'>
            <h2>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
            <form>
                <AuthInput value={username} setValue={setUsername} type="text" placeholder="Введите username..." />
                <AuthInput value={password} setValue={setPassword} type="password" placeholder="Введите пароль..." />
                <div className='login-bottom'>
                    {isLogin ?
                        <span>
                            <NavLink to='/registration'>Нет аккаунта? Зарегестрируйтесь!</NavLink>
                        </span>
                        :
                        <span>
                            <NavLink to='/login'>Есть аккаунт? Авторизируйтесь!</NavLink>
                        </span>
                    }
                    <Button onClick={async () => click()}>
                        {isLogin ?
                            'Войти'
                            :
                            'Регистрация'
                        }
                    </Button>
                </div>
            </form>
        </div>
    );
});

export default Auth;