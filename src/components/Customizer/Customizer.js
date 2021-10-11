import React from 'react';
import style from './Customizer.module.scss';
import backgroundChip1 from '../../assets/svg/background-chip-1.svg';
import backgroundChip2 from '../../assets/svg/background-chip-2.svg';
import iconCustomize from '../../assets/svg/icon-customize.svg';



export const Customizer = (props) => {
    return (
        <div className={`app-row app-col ${style["customizer"]}`}>
            <div className={`${style['greeting']}`}>Your Greeting: <input value={props.greeting} type="text" onChange={props.handleGreetingChange}></input></div>
            <div><span className={`${style['palette']}`}>Color Palette</span>
                <span className={`${style["circle"]} ${style["active"]}`} style={{backgroundColor:props.colors.lilac}} onClick={props.handleColorPaletteChange.bind(this, 'theme-light')}></span> 
                <span className={`${style["circle"]}`} style={{backgroundColor:props.colors.offBlack}} onClick={props.handleColorPaletteChange.bind(this, 'theme-dark')}></span> 
                <span className={`${style['slash']}`}>/</span>
                <span className={`${style['background']}`}>Background </span>
                <span className={`${style["circle"]} ${style["active"]}`} style={{background:`url(${backgroundChip1})`}} onClick={props.handleBackgroundChange.bind(this, 'theme-sun')}></span> 
                <span className={`${style["circle"]}`} style={{background:`url(${backgroundChip2})`}} onClick={props.handleBackgroundChange.bind(this, 'theme-flower')}></span>  </div>
        </div>
    )

}

export default Customizer;