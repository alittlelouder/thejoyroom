import React from 'react';
import style from './Greeting.module.scss';


export const Greeting = (props) => {
    return (
        <div>
        <span className={style["intro"]}>Welcome Shanelle,</span>
        </div>
    )
}

export default Greeting;