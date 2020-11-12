import React from 'react';
import SearchPagination from "./SearchPagination";
import BlogCard from "../main_page/blog/BlogCard";


function SearchMainProject(props) {
    return (
        <div className='landing-page-block'>
            <h1 id={'projects'}>Проекты</h1>
            <SearchPagination
                data={props}
                card={(piece, idx) => <BlogCard key={idx} {...piece} />}
            />
        </div>);
}

export default SearchMainProject;