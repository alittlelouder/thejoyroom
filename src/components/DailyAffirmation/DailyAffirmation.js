import React from 'react';
import style from './DailyAffirmation.module.scss';


export const DailyAffirmation = (props) => {
    return (
        <div>
        <span className={style["eyebrow"]}>Today's Affirmation</span>
        <h1 className={style["affirmation"]}>I am so grateful for the courage to be my most authentic self</h1>
        </div>
    )
}

export default DailyAffirmation;