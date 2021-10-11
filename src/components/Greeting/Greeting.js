import React from 'react';
import style from './Greeting.module.scss';


export const Greeting = (props) => {
    return (
        <p className={`${style["greeting"]} app-col`}>{props.greeting ? ` ${props.greeting}` : ''}</p>
    )
}

export default Greeting;