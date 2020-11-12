import React from 'react';
import BlogCard from './BlogCard';
import Pagination from '../../shared/Pagination';


function MainBlog() {
    return (
        <div className='landing-page-block'>
            <h1 id={'news'}>Блог</h1>
            <Pagination
                url='news'
                card={(piece, idx) => <BlogCard key={idx} {...piece} />}
                viewAllText='Все новости'
            />
        </div>);
}

export default MainBlog;