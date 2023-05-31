import React, { useContext } from 'react';
import "../styles/App.css";
import { observer } from 'mobx-react-lite';
import { Context } from '../index';

const Profile = observer(() => {
    const { user } = useContext(Context);

    function checkValue(data) {
        if (data) return data
        else return 'не указано'
    }

    return (
        <div className='posts container'>
            <h1 className="header">Личный кабинет</h1>
            <ul>
                <li>
                    avg_rating:
                    {checkValue()}
                </li>
                <li>
                    email:
                    {checkValue()}
                </li>
                <li>
                    feedback_count:
                    {checkValue()}
                </li>
                <li>
                    first_name:
                    {checkValue()}
                </li>
                <li>
                    id:
                    {checkValue()}
                </li>
                <li>
                    last_name:
                    {checkValue()}
                </li>
                <li>
                    phone:
                    {checkValue()}
                </li>
                <li>
                    profile:
                    {checkValue()}
                </li>
                <li>
                    social_network:
                    {checkValue()}
                </li>
                <li>
                    username:
                    {checkValue()}
                </li>
            </ul>
        </div>
    );
});

export default Profile;