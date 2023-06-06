import React from 'react';
import "../styles/App.css";

const Contacts = () => {
    return (
        <div className='contacts'>
            <div className='container'>
                <h2 className='heading'>Contacts</h2>
                <div>
                    <p className='contacts-flex'>
                        E-mail:
                        tetreco.service@gmail.com
                    </p>
                    <p className='contacts-flex'>
                        Address:
                        11000, Serbia, Belgrade, Juria Gagarina, 71
                    </p>
                    <p className='contacts-flex'>
                        Phone number:
                        +381 062 854 4808
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contacts;