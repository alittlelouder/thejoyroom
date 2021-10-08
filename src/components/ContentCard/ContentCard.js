import React from 'react';
import style from './ContentCard.module.scss';

export const ContentCard = (props) => {
    return (
        <div className={style["section"]}>
            <span className={style["eyebrow"]}>OCTOBER WoC SPOTLIGHT</span>
            <div className={style["image"]}>
            <img></img>
            </div>
            <p className={style["title"]}>Celeste Ng</p>
            <p className={style["description"]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris magna massa, dignissim id tellus at, mollis auctor libero. </p>

    </div>
    )

}

export default ContentCard;