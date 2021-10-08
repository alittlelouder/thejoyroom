import React from 'react';
import style from './ContentCard.module.scss';

export const ContentCard = (props) => {
    return (
        <div className={ `app-col app-col-lg-6 ${style["content-card"]}`} style={{backgroundColor: props.backgroundColor}}>
            <span className={style["eyebrow"]}>{props.eyebrow}</span>
            <div className={style["image"]}>
            <img src={props.image}></img>
            </div>
            <p className={style["title"]}>{props.title}</p>
            <p className={style["description"]}>{props.description} </p>

    </div>
    )

}

export default ContentCard;

