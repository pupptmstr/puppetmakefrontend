import React from 'react';
import vk from "../../resources/img/vk_small.png";
import insta from "../../resources/img/insta_small.png";
import whatsapp from "../../resources/img/messenger_small.png";
import Header from "./Header";


function Footer() {
    return (
        <div>
            <Header/>
            <div className={'footer-content'}>
                <a href={'https://vk.com/pupptmstr'}> <img src={vk} alt={'VK'}/> </a>
                <a href={'https://instagram.com/pupptmstr/'}> <img src={insta} alt={'Instagram'}/> </a>
                <a href={'https://wa.me/79967875622'}> <img src={whatsapp} alt={'WhatsApp'}/> </a>
                <span className={'footer-text'}> © 2020 PuppetMake studio. Все права защищены</span>
            </div>
        </div>
    )
}

export default Footer