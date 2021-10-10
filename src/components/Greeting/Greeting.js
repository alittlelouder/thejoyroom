import React from 'react';
import style from './Greeting.module.scss';


export const Greeting = (props) => {
    return (
        <div className="app-row app-col greeting">
        <p className={style["greeting"], 'app-col app-col-lg-offset-2'}>Welcome Shanelle,</p>
        </div>
    )
}

export default Greeting;