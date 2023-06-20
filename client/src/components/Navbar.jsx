import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from './UI/button/Button';
import "../styles/App.css";
import { observer } from 'mobx-react-lite'
import Modal from './UI/modal/Modal';
import AuthInput from './UI/input/AuthInput';
import { Context } from '../index';


const Navbar = observer(() => {
    const { user, search } = useContext(Context);

    const [modal, setModal] = useState(false);
    const [value, setValue] = useState('');
    const navigate = useNavigate();
    const logOut = () => {
        localStorage.removeItem('data');
        user.setUser({})
        user.setIsAuth(false);
        navigate('/posts')
    }

    return (
        <div className='navbar'>
            <div className='container'>
                <div className='navbar__content'>
                    <Link className='main-link' to="/posts">TETRECO</Link>
                    <div className="navbar__links">
                        <Link to="/about">О нас</Link>
                        <Link to="/contacts">Контакты</Link>
                        <Link to="/posts">Посты</Link>
                    </div>
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
                </div>
            </div>
            <div className='navbar-bottom-content container'>
                <Button onClick={() => setModal(true)}>
                    Категории
                </Button>
                <Modal visisble={modal} setVisible={setModal}>
                    Модальное окно на будущее
                </Modal>
                <div className='search-space'>
                    <AuthInput value={value} setValue={setValue} type="text" placeholder="Поиск" />
                    <Button onClick={() => (search.setData(value), setValue(''))}>
                        Поиск
                    </Button>
                </div>
                {user.isAuth ?
                    <Button onClick={() => navigate('/postform')}>
                        Создать карточку товара
                    </Button>
                    :
                    <Button onClick={() => navigate('/login')}>
                        Создать карточку товара
                    </Button>
                }
            </div>
        </div>
    );
});

export default Navbar;