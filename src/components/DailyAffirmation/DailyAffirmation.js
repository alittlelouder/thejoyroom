import React, { useState } from "react";
import style from './DailyAffirmation.module.scss';


export const DailyAffirmation = (props) => {
    return (
        <div className="header app-col app-col-md-20" style={{opacity: props.opacity}}>
        <p className={`${style["eyebrow"]} app-row app-col`}>Today's Affirmation</p>
        <h1 className={`${style["affirmation"]} app-row app-col`}>{props.text}</h1>
        </div>
    )
}

export default DailyAffirmation;