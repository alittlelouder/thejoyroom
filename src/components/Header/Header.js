import React from 'react';
import logo from '../../assets/images/joy-room-logo.png';
import iconCustomize from '../../assets/svg/icon-customize.svg';
import iconClose from '../../assets/svg/icon-close.svg';
import style from './Header.module.scss';

export const Header = (props) => {
    return (
        <div className="app-row app-col header">
            <div className={`${style["logo"]} app-col app-col-lg-10`}>
                <img src={logo} alt=""/>
            </div>
            <div className={`${style["button-wrapper"]} app-col app-col-lg-10`}>
                <button className={`${style["button"]}`} onClick={props.handleCustomizeClick}>{props.isCustomizing ? 'Close' : 'Customize'} <span><img src={props.isCustomizing ? iconClose : iconCustomize} /></span></button>
            </div>
        </div>
    )

}

export default Header;