import React from 'react';
import SearchPagination from "./SearchPagination";
import BlogCard from "../main_page/blog/BlogCard";


function SearchMainBlog(props) {
    const {array_data} = props;
    console.log(array_data);
    return (
        <div className='landing-page-block'>
            <h1 id={'news'}>Блог</h1>
            <SearchPagination
                inputData={array_data}
                card={(piece, idx) => <BlogCard key={idx} {...piece} />}
            />
        </div>);
}

export default SearchMainBlog;