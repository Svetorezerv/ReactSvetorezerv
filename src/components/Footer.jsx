import React from 'react';
import "../styles/App.css";

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <ul className='footer__list'>
                    <li>О компании</li>
                    <li>Контакты</li>
                    <li>Карьера</li>
                    <li>Отзывы</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;