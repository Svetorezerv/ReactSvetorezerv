import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from './UI/button/Button';
import "../styles/App.css";
import { Context } from '../index.js';
import { observer } from 'mobx-react-lite'

const Navbar = observer(() => {
    const { user } = useContext(Context);
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem('data')
        user.setUser({})
        user.setIsAuth(false);
    }
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='navbar__content'>
                    <Link className='main-link' to="./posts">TETRECO</Link>
                    {user.isAuth ?
                        <div>
                            <span className='main-link'>
                                <Button onClick={() => logOut()}>
                                    Выйти
                                </Button>
                            </span>
                            <Button onClick={() => navigate('/profile')}>
                                Личный кабинет
                            </Button>
                        </div>
                        :
                        <Button onClick={() => navigate('/register')}>
                            Авторизация
                        </Button>
                    }
                    <div className="navbar__links">
                        <Link to="./about">О нас</Link>
                        <Link to="./posts">Посты</Link>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Navbar;