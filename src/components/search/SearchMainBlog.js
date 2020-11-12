import React from 'react';
import SearchPagination from "./SearchPagination";
import BlogCard from "../main_page/blog/BlogCard";


function SearchMainBlog(props) {
    return (
        <div className='landing-page-block'>
            <h1 id={'news'}>Блог</h1>
            <SearchPagination
                data={props.array_data}
                card={(piece, idx) => <BlogCard key={idx} {...piece} />}
            />
        </div>);
}

export default SearchMainBlog;