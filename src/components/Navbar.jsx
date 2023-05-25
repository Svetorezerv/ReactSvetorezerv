import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from './UI/button/Button';
import { Context } from '../App';
import { observer } from 'mobx-react-lite'

const Navbar = observer(() => {
    const { user } = useContext(Context)
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='navbar__content'>
                    <Link to="./posts">TETRECO</Link>
                    {user.isAuth ?
                        <Button onClick={() => user.setIsAuth(false)}>
                            Выйти
                        </Button>
                        :
                        <Button onClick={() => user.setIsAuth(true)}>
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