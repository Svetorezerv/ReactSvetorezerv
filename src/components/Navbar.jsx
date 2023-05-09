import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from './UI/button/Button';
import { AuthorizationContext } from '../context';

const Navbar = () => {
    const { isAuthorization, setIsAuthorization } = useContext(AuthorizationContext);

    const logout = () => {
        setIsAuthorization(false)
        localStorage.removeItem('authorization')
    }

    return (
        <div className='navbar'>
            <Button onClick={logout}>
                Выйти
            </Button>
            <div className="navbar__links">
                <Link to="./about">О нас</Link>
                <Link to="./posts">Посты</Link>
            </div>
        </div>
    );
};

export default Navbar;