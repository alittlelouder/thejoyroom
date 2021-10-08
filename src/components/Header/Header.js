import React from 'react';
import logo from '../../assets/images/joy-room-logo.png';
import style from './Header.module.scss';

export const Header = (props) => {
    return (
        <div className="app-row">
    <div className={style["logo"]}>
        <img src={logo} alt=""/>
    </div>
    </div>
    )

}

export default Header;