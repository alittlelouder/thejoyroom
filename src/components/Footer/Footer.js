import React from 'react';
import allcoLogo from '../../assets/images/footer-logo-allco.png';
import instagramLogo from '../../assets/images/footer-logo-instagram.png';
import style from './Footer.module.scss';

export const Footer = (props) => {
    return (
        /* eslint-disable-next-line */
        <div className={`app-row app-col ${style['wrapper']}`}>
            <div className={`app-col app-col-xs-20 app-col-xs-offset-2 app-row-xs--between ${style["footer"]}`}>
                <div className={`app-col-xs-5 ${style['item']}`}><a href="https://alittlelouder.co"><img src={allcoLogo} alt=""/></a></div>
                <div className={`app-col-xs-5 ${style['item']}`}><a href="https://www.instagram.com/alittlelouderco"><img src={instagramLogo} alt=""/></a></div>
                <div className={`app-col-xs-5 ${style['item']}`}>
                    <div>Share The Joy Room</div>
                    <div><a href={props.chromeLink}>View on Chrome Web Store</a></div>
                </div>
            </div>
        </div>
    )
}

export default Footer;