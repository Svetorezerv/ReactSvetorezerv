import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from './UI/button/Button';
import { AuthorizationContext } from '../context';

const Navbar = () => {
    const {  setIsAuthorization } = useContext(AuthorizationContext);

    const logout = () => {
        setIsAuthorization(false)
        localStorage.removeItem('authorization')
    }

    return (
        <div className='navbar'>
            <div className='container'>
                <div className='navbar__content'>
                  <div>
                  <Button onClick={logout}>
                        Выйти
                    </Button>
                  </div>
                    <div className="navbar__links">
                        <Link to="./about">О нас</Link>
                        <Link to="./posts">Посты</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;