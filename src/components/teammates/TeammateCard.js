import React from "react";
import {cutString, getDate} from "../../util";
import '../../resources/styles/teammates/TeammateCard.css'
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";

function TeammateCard(props) {
    const date = new Date();
    const {first_name,
        surname,
        nickname,
        hired_at,
        global_role,
        current_role,
        main_photo_link,
        description,
        social_links,
        photos} = props;
    console.log(props);

    return (
        <div className='big-teammate-card'>
            <img className='avatar' src={main_photo_link} alt='avatar'/>
            <div className='big-teammate-card-body'>
                <div className='full-name'>
                    <h2>{`${first_name} "${nickname}" ${surname}`}</h2>
                </div>
                <div className='role'>{`${global_role}`}</div>
                <div className={'years-in-company'}>
                    {`Сколько лет в компании: ${date.getFullYear() - hired_at.Year + 1}`}
                </div>
                <div className={'curr-role'}> {`Нынешняя роль в компании: ${current_role}`}</div>
                <div className={'description'}>
                    {`Краткая информация: ${description}`}
                </div>

                <button onClick={() => props.history.push(`/`)}>Назад</button>

            </div>
        </div>
    );
}


TeammateCard.propTypes = {
    first_name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    hired_at: PropTypes.object.isRequired,
    global_role: PropTypes.string.isRequired,
    current_role: PropTypes.string.isRequired,
    main_photo_link: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    social_links: PropTypes.string.isRequired,
    photos: PropTypes.string.isRequired
};

export default withRouter(TeammateCard);