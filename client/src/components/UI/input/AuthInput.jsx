import React from 'react';
import classes from './Input.module.css'

const AuthInput = (props) => {
    return (
        <input className={classes.input} onChange={(event)=> props.setValue(event.target.value)}
               value={props.value}
               type={props.type}
               placeholder={props.placeholder}/>
    );
};

export default AuthInput;
