import React from 'react';
import style from './ContentCard.module.scss';
import celeste from '../../assets/images/celeste.png'

export const ContentCard = (props) => {
    return (
        <div className={ `app-col app-col-lg-6 ${style["content-card"]}`}>
            <span className={style["eyebrow"]}>{props.eyebrow}</span>
            <div className={style["image"]}>
            <img src={celeste}></img>
            </div>
            <p className={style["title"]}>Celeste Ng</p>
            <p className={style["description"]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris magna massa, dignissim id tellus at, mollis auctor libero. </p>

    </div>
    )

}

export default ContentCard;

