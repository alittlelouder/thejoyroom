import React from 'react';
import style from './ContentCard.module.scss';

export const ContentCard = (props) => {
    return (
        <div className={`app-col-md-18 app-col-lg-5 ${style["content-card"]}`} style={{backgroundColor: props.backgroundColor}}>
            <span className={style["eyebrow"]}>{props.eyebrow}</span>
            <div className={style["image"]}>
            <img src={props.image}/>
            </div>
            <p className={style["title"]}>{props.title}</p>
            <p className={style["description"]}>{props.description} </p>

    </div>
    )

}

export default ContentCard;

