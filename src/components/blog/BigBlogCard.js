import React from "react";
import {cutString, getDate} from "../../util";
import PropTypes from "prop-types";

function BigBlogCard(props) {

    const {content, create_at, header, main_image_link} = props;

    return(
        <div className='card blog card'>
            <img src={main_image_link} alt='header img'/>
            <div className='blog-card-body'>

                <div className='date'>
                    <span>{getDate(create_at.Day, create_at.Month, create_at.Year)}</span>
                </div>

                <h2>{header}</h2>
                <div>{cutString(content, 110)}</div>
                <button onClick={() => props.history.push(`/`)}>Назад</button>

            </div>
        </div>
    );
}


BigBlogCard.propTypes = {
    create_at: PropTypes.object.isRequired,
    header: PropTypes.string.isRequired,
    main_image_link: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};

export default BigBlogCard;