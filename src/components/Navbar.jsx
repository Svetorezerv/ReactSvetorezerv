import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from './UI/button/Button';
import { Context } from '../index.js';
import { observer } from 'mobx-react-lite'

const Navbar = observer(() => {
    const { user } = useContext(Context);
    const navigate = useNavigate();

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false);
    }
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='navbar__content'>
                    <Link className='main-link' to="./posts">TETRECO</Link>
                    {user.isAuth ?
                        <Button onClick={() => logOut()}>
                            Выйти
                        </Button>
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