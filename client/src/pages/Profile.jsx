import React from 'react';
import "../styles/App.css";
import { observer } from 'mobx-react-lite';

const Profile = observer(() => {

    const data = JSON.parse(localStorage.getItem('data'));
    console.log(data);

    function checkValue(data) {
        if (data === '' || data === null || data.length === 0) return 'не указано';
        else return data;
    }

    return (
        <div className='posts container'>
            <h1 className="header">Личный кабинет</h1>
            <ul>
                <li>
                    avg_rating:
                    {checkValue(data.avg_rating)}
                </li>
                <li>
                    email:
                    {checkValue(data.email)}
                </li>
                <li>
                    feedback_count:
                    {checkValue(data.feedback_count)}
                </li>
                <li>
                    first_name:
                    {checkValue(data.first_name)}
                </li>
                <li>
                    id:
                    {checkValue(data.id)}
                </li>
                <li>
                    last_name:
                    {checkValue(data.last_name)}
                </li>
                <li>
                    phone:
                    {checkValue(data.phone)}
                </li>
                {/* <li>
                    profile:
                    {checkValue(data.profile)}
                </li> */}
                <li>
                    social_network:
                    {checkValue(data.social_network)}
                </li>
                <li>
                    username:
                    {checkValue(data.username)}
                </li>
            </ul>
        </div>
    );
});

export default Profile;