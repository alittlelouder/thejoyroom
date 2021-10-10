import React from 'react';
import style from './DailyAffirmation.module.scss';


export const DailyAffirmation = (props) => {
    return (
        <div className="header">
        <p className={`${style["eyebrow"]} app-row app-col app-col-lg-offset-2`}>Today's Affirmation</p>
        <h1 className={`${style["affirmation"]} app-row app-col app-col-lg-offset-2`}>{props.text}</h1>
        </div>
    )
}

export default DailyAffirmation;