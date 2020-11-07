import React from 'react';
import logo from './logo.png';
import magnifier from './magnifier.png';

function Header() {
    return (
        <div className={"header"}>

            <img src={logo} className='header-logo' alt='logo' width={240} height={103}/>

            <ul>
                <li><a href="/#news">Блог</a></li>
                <li><a href="/#team">Наша команда</a></li>
                <li><a href="/#projects" style={{color:'#808080', opacity:0.6}}>Проекты</a></li>
                <li><a href="/#support" style={{color:'#808080', opacity:0.6}}>Помощь</a></li>
            </ul>

            <div className="searchBlock">
                <img src={magnifier} alt='search' width={17} height={17} className="magnifier"/>
                <input type='search' className='search' placeholder="Поиск..."/>
            </div>

        </div>
    )
}

export default Header