import React from 'react';
import BlogCard from './BlogCard';
import Pagination from '../../shared/Pagination';


const MainBlog = () =>
  <Pagination
      id='news'
    title='Блог'
    url='news'
    card={(piece, idx) => <BlogCard key={idx} {...piece} />}
    viewAllText='Все новости'
  />;

export default MainBlog;