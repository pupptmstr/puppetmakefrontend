import React from 'react';
import PropTypes from 'prop-types';
import { cutString } from '../../../util';
import '../../../resources/styles/main_page/team/TeamCard.css';


function TeamCard(props) {

  const { name, currentRole, description, mainPhotoLink, nickname, surname } = props;
  const nicknameWSpace = nickname ? `"${nickname}" ` : '';

  return (
    <div className='card team-card'>
      <div className='avatar'>
        <img src={mainPhotoLink} alt='avatar'/>
      </div>
      <div className='team-card-body'>
        <h2>{name} {nicknameWSpace}{surname}</h2>
        <h3>{currentRole}</h3>
        <div>{cutString(description, 120)}</div>
      </div>
      <button>Подробнее</button>
    </div>
  );

}

TeamCard.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  nickname: PropTypes.string,
  currentRole: PropTypes.string.isRequired,
  mainPhotoLink: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default TeamCard;