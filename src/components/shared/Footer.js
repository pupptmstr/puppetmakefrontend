import React from 'react';
import vk from "../../resources/img/vk_small.png";
import twitter from "../../resources/img/twitter.svg";
import telegram from "../../resources/img/telegram.svg";
import Header from "./Header";


function Footer() {
    return (
        <div>
            <Header/>
            <div className={'footer-content'}>
                <a href={'https://vk.com/pupptmstr'} target="_blank">
                    <img src={vk} alt={'VK'} className={'out-footer-href'}/>
                </a>
                <a href={'https://twitter.com/pupptmstr_'} target="_blank">
                    <img src={twitter} alt={'Twitter'} className={'out-footer-href'}/>
                </a>
                <a href={'https://t.me/pupptmstr/'} target="_blank">
                    <img src={telegram} alt={'Telegram'} className={'out-footer-href'}/>
                </a>
                <span className={'footer-text'}> © 2020 PuppetMake studio. Все права защищены</span>
            </div>
        </div>
    )
}

export default Footer