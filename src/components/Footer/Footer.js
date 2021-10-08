import React from 'react';
import allcoLogo from '../../assets/images/footer-logo-allco.png';
import instagramLogo from '../../assets/images/footer-logo-instagram.png';
import style from './Footer.module.scss';

export const Footer = (props) => {
    return (
        /* eslint-disable-next-line */
        <div className={`app-row ${style["footer"]}`}>
            <div className={style['flex-container']}>
                <div className={style['flex-items']}><img src={allcoLogo} alt=""/></div>
                <div className={style['flex-items']}><img src={instagramLogo} alt=""/></div>
                <div className={style['flex-items']}>
                    <div>Share The Joy Room</div>
                    <div>View on Chrome Web Store</div>
                </div>
            </div>
        </div>
    )
}

export default Footer;