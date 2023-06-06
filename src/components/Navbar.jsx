import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from './UI/button/Button';
import "../styles/App.css";
import { Context } from '../index.js';
import { observer } from 'mobx-react-lite'
import Modal from './UI/modal/Modal';

const Navbar = observer(() => {
    const { user } = useContext(Context);
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem('data')
        user.setUser({})
        user.setIsAuth(false);
    }

    const [modal, setModal] = useState(false);
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
                        <div>
                            <span className='main-link'>
                                <Button onClick={() => navigate('/login')}>
                                    Авторизация
                                </Button>
                            </span>
                            <Button onClick={() => navigate('/registration')}>
                                Регистрация
                            </Button>
                        </div>
                    }
                    <div className="navbar__links">
                        <Link to="./about">О нас</Link>
                        <Link to="./contacts">Контакты</Link>
                        <Link to="./posts">Посты</Link>
                    </div>
                </div>
            </div>
            <div className='navbar-bottom-content container'>
                <Button onClick={() => setModal(true)}>
                    Категории
                </Button>
                <Modal visisble={modal} setVisible={setModal}>
                    Модальное окно на будущее
                </Modal>

                <div>
                    search
                </div>
            </div>
        </div>
    );
});

export default Navbar;