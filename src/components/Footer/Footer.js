import React from 'react';
import allcoLogo from '../../assets/images/footer-logo-allco.png';
import instagramLogo from '../../assets/images/footer-logo-instagram.png';
import style from './Footer.module.scss';

export const Footer = (props) => {
    return (
        /* eslint-disable-next-line */
        <div className={`app-row app-col ${style['wrapper']}`}>
            <div className={`app-col app-col-md-20 app-col-lg-20  app-col-md-offset-2 app-row-lg--between ${style["footer"]}`}>
                <div className={`app-col-md-18 app-col-lg-5 ${style['item']}`}><img src={allcoLogo} alt=""/></div>
                <div className={`app-col-md-18 app-col-lg-5 ${style['item']}`}><img src={instagramLogo} alt=""/></div>
                <div className={`app-col-md-18 app-col-lg-5 ${style['item']}`}>
                    <div>Share The Joy Room</div>
                    <div>View on Chrome Web Store</div>
                </div>
            </div>
        </div>
    )
}

export default Footer;