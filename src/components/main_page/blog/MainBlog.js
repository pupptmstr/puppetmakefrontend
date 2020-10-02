import React from 'react';
import { mockNews } from '../../../mockData';
import BlogCard from './BlogCard';
import Pagination from '../../shared/Pagination';


const MainBlog = () =>
  <Pagination
    title='Блог'
    url='news'
    card={(piece, idx) => <BlogCard key={idx} {...piece} />}
    viewAllText='Все новости'
    initialData={mockNews}
  />;

export default MainBlog;