import React from 'react';
import PropTypes from 'prop-types';
import {cutString} from '../../../util';
import '../../../resources/styles/main_page/team/TeamCard.css';
import {withRouter} from "react-router-dom";


function TeamCard(props) {

    const {id, first_name, global_role, description, main_photo_link, nickname, surname} = props;
    const nicknameWSpace = nickname ? `"${nickname}" ` : '';

    return (
        <div className='card team-card'>
            <div className='avatar'>
                <img src={main_photo_link} alt='avatar'/>
            </div>
            <div className='team-card-body'>
                <h2>{first_name} {nicknameWSpace}{surname}</h2>
                <h3>{global_role}</h3>
                <div>{cutString(description, 120)}</div>
            </div>
            <button onClick={() => props.history.push(`/teammates/one/${id}`)}>Подробнее</button>
        </div>
    );

}

TeamCard.propTypes = {
    id: PropTypes.number.isRequired,
    first_name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    nickname: PropTypes.string,
    global_role: PropTypes.string.isRequired,
    main_photo_link: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default withRouter(TeamCard);