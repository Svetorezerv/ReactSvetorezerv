import React from 'react';
import classes from './Modal.module.css'

const Modal = ({ children, visisble, setVisible }) => {

    const rootClasses = [classes.modal]
    if (visisble) {
        rootClasses.push(classes.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.modal__content} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
            <button onClick={() => setVisible(false)}>X</button>
        </div>
    );
};

export default Modal;