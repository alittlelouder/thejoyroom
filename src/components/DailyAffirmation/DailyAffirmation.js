import React from 'react';
import style from './DailyAffirmation.module.scss';


export const DailyAffirmation = (props) => {
    return (
        <div className="header">
        <p className={`${style["eyebrow"]} app-row app-col`}>Today's Affirmation</p>
        <h1 className={`${style["affirmation"]} app-row app-col`}>{props.text}</h1>
        </div>
    )
}

export default DailyAffirmation;