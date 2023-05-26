import React, { useContext, useState } from 'react';
import AuthInput from '../components/UI/input/AuthInput';
import Button from '../components/UI/button/Button';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { login, registration } from '../API/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '../App';

const Auth = observer(() => {
    const { user } = useContext(Context);
    const location = useLocation()
    const navigate = useNavigate();
    const isLogin = location.pathname === '/login';
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const click = async () => {
        let data;
        let resp;
        if (isLogin) {
            try {
                data = await login(username, password);
                user.setUser(user);
                user.setIsAuth(true);
                navigate('/posts');
            }
            catch (error) {
                console.log(error.response.data.detail);
                alert(error.response.data.detail)
            }
        } else {
            resp = await registration(email, username, password, password2);
            data = await resp.json();
            console.log(resp);
            console.log(data);
            if (resp.status === 400) {
                alert('error')
            } else if (resp.status === 201) {
                alert('ready')
            }
        }
    }

    return (
        <div className='login'>
            <h2>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
            <form>
                {isLogin
                    ?
                    <span>
                        <AuthInput value={username} setValue={setUsername} type="text" placeholder="Введите username..." />
                        <AuthInput value={password} setValue={setPassword} type="password" placeholder="Введите пароль..." />
                    </span>
                    :
                    <span>
                        <AuthInput value={email} setValue={setEmail} type="email" placeholder="Введите email..." />
                        <AuthInput value={username} setValue={setUsername} type="text" placeholder="Введите username..." />
                        <AuthInput value={password} setValue={setPassword} type="password" placeholder="Введите пароль..." />
                        <AuthInput value={password2} setValue={setPassword2} type="password" placeholder="Подтвердите пароль..." />
                    </span>
                }
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