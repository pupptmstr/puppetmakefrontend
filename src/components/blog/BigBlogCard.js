import React from "react";
import {cutString, getDate} from "../../util";
import '../../resources/styles/blog/BigBlogCard.css'
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";

function BigBlogCard(props) {

    const {content, create_at, header, main_image_link} = props;
    console.log(props);

    return (
        <div className='big-blog-card'>
            <img className='headerImg' src={main_image_link} alt='header img'/>
            <div className='big-blog-card-body'>

                <div className={'big-blog-dark-header'}>
                    <div className='big-blog-date'>
                        <span>{getDate(create_at.Day, create_at.Month, create_at.Year)}</span>
                    </div>

                    <h3>{header}</h3>
                </div>

                <div className={'big-blog-content'}>{content}</div>
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

export default withRouter(BigBlogCard);