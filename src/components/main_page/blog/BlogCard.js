import React from 'react';
import PropTypes from 'prop-types';
import '../../../resources/styles/main_page/blog/BlogCard.css'
import {cutString, getDate} from '../../../util';
import {withRouter} from "react-router-dom";


function BlogCard(props) {

    const {id, content, create_at, header, main_image_link} = props;

    return (
        <div className='card blog-card'>
            <img src={main_image_link} alt='header img'/>
            <div className='blog-card-body'>
                <span>{getDate(create_at.Day, create_at.Month, create_at.Year)}</span>
                <h2>{header}</h2>
                <div>{cutString(content, 110)}</div>
                <button onClick={() => props.history.push(`/news/one/${id}`)}>Подробнее</button>

            </div>
        </div>
    );
}

BlogCard.propTypes = {
    id: PropTypes.number.isRequired,
    create_at: PropTypes.object.isRequired,
    header: PropTypes.string.isRequired,
    main_image_link: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};

export default withRouter(BlogCard);