import React from 'react';
import style from './CardContainer.module.scss';

export const CardContainer = (props) => {
    return (
        <div className={`app-row app-col ${style["wrapper"]}`}>
            <div className={`app-col app-col-md-20 app-col-lg-20  app-col-md-offset-2 app-row-lg--between ${style["card-container"]} `}>{props.children}</div>
       
    </div>
    )

}

export default CardContainer;