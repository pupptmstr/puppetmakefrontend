import React from 'react';
import PropTypes from 'prop-types';
import '../../../resources/styles/main_page/blog/BlogCard.css'
import { cutString } from '../../../util';


function BlogCard(props) {

  const { content, createAt, header, mainImageLink } = props;

  return (
    <div className='card blog-card'>
      <img src={mainImageLink} alt='header img'/>
      <div className='blog-card-body'>
        <span>{createAt}</span>
        <h2>{header}</h2>
        <div>{cutString(content, 110)}</div>
        <button>Подробнее</button>
      </div>
    </div>
  );
}

BlogCard.propTypes = {
  createAt: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  mainImageLink: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default React.memo(BlogCard);