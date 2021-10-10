import React from 'react';
import style from './Customizer.module.scss';
import backgroundChip1 from '../../assets/svg/background-chip-1.svg';
import backgroundChip2 from '../../assets/svg/background-chip-2.svg';
import iconCustomize from '../../assets/svg/icon-customize.svg';



export const Customizer = (props) => {
    return (
        <div className={`app-row app-col app-col-md-offset-2 ${style["customizer"]}`}>
            <div>Your Greeting: <input value={props.greeting} type="text" onChange={props.handleGreetingChange}></input> <span><img src={iconCustomize} /></span></div>
            <div>Color Palette 
                <span className={`${style["circle"]} ${style["active"]}`} style={{backgroundColor:props.colors.lilac}}></span> 
                <span className={`${style["circle"]}`} style={{backgroundColor:props.colors.offBlack}}></span> 
                / Background 
                <span className={`${style["circle"]} ${style["active"]}`} style={{background:`url(${backgroundChip1})`}}></span> 
                <span className={`${style["circle"]}`} style={{background:`url(${backgroundChip2})`}}></span>  </div>
        </div>
    )

}

export default Customizer;