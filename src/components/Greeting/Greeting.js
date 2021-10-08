import React from 'react';
import style from './Greeting.module.scss';


export const Greeting = (props) => {
    return (
        <div>
        <span className={style["greeting"], 'app-col app-col-lg-offset-2'}>Welcome Shanelle,</span>
        </div>
    )
}

export default Greeting;