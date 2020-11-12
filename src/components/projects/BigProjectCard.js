import React from "react";
import {cutString, getDate} from "../../util";
import '../../resources/styles/projects/BigProjectCard.css'
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";

function BigProjectCard(props) {

    const {id, description, genres, project_name, status, tech_specs, logo_img_link} = props;
    console.log(props);

    return (
        <div className={'big-project-card'}>
            <div className={'big-project-name'}>{project_name}</div>
            <div className={'big-project-filler'}>Об этой игре</div>
            <img src={logo_img_link} className={'big-project-logo'}/>
            <div className={'big-project-main-info'}>
                <div className={'big-project-genres'}>{`Жанры: ${genres}`}</div>
                <div className={'big-project-description'} style={{overflowY: "auto"}}>{description}</div>
                <div className={'big-project-tech-specs'} style={{overflowY: "auto"}}>
                    {`Технические характеристики: ${tech_specs}`}
                </div>
                <div className={'big-project-status'}>{status ? 'Статус: Выпущена' : 'Статус: В разработке'}</div>
                <div className={'big-project-language'}>Язык: Русский, Английский</div>
                <div className={'developer'}>Разработчик: PuppetMake studio</div>
            </div>
            <button className={'back-btn'} onClick={() => props.history.push(`/`)}>Назад</button>
        </div>
    );
}


BigProjectCard.propTypes = {
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    project_name: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
    tech_specs: PropTypes.string.isRequired,
    logo_img_link: PropTypes.string.isRequired
};

export default withRouter(BigProjectCard);