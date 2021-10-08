import React from 'react';
import logo from '../../assets/images/joy-room-logo.png';
import style from './Header.module.scss';

export const Header = (props) => {
    return (
        <div className="app-row app-col header">
    <div className={style["logo"] + "app-col app-col-lg-3 app-col-lg-offset-2"}>
        <img src={logo} alt=""/>
    </div>
    </div>
    )

}

export default Header;