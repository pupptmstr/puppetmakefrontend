import React from 'react';
import logo from './logo.png';
import magnifier from './magnifier.png';
import {withRouter} from "react-router-dom";

function Header(props) {
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            props.history.push(`/search/${event.target.value}`)
        }
    };
    return (
        <div className={"header"}>

            <a className={'logo-home-link'} href={"/"}>
                <img src={logo} className='header-logo' alt='logo' width={240} height={103}/>
            </a>

            <ul>
                <li><a className={'header-link'} href={"/#news"}>Блог</a></li>
                <li><a className={'header-link'} href={"/#team"}>Наша команда</a></li>
                <li><a className={'header-link'} href={"/#projects"}>Проекты</a></li>
                <li>
                    <a className={'header-link'} href={"/#support"} style={{color: '#808080', opacity: 0.6}}>Помощь</a>
                </li>
            </ul>

            <div className="searchBlock">
                <img src={magnifier} alt='search' width={17} height={17} className="magnifier"/>
                <input name='query' type='search' className='search' placeholder="Поиск..." onKeyDown={handleKeyDown}/>
            </div>

        </div>
    )
}

export default withRouter(Header);