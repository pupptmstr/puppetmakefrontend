import React, {useState} from 'react';
import PropTypes from 'prop-types';
import '../../../resources/styles/main_page/projects/ProjectCard.css'
import {withRouter} from "react-router-dom";
import {cutString} from "../../../util";


function ProjectCard(props) {
    const {id, description, genres, project_name, status, tech_specs, logo_img_link} = props;
    const [elemText, setElemText] = useState(project_name);
    return (
        <div className='card project-card'
        onMouseEnter={() => setElemText(cutString(description, 100))}
        onMouseLeave={() => setElemText(cutString(project_name))}>
            <a onClick={() => props.history.push(`/projects/one/${id}`)} className={'project-card-big-button'}>
                <div className={'project-card-body'}>
                    <img className={'project-card-logo'} src={logo_img_link}/>
                    <div className={'project-card-name'}>
                        {elemText}
                    </div>
                </div>
            </a>
        </div>
    );
}

ProjectCard.propTypes = {
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    project_name: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
    tech_specs: PropTypes.string.isRequired,
    logo_img_link: PropTypes.string.isRequired
};

export default withRouter(ProjectCard);