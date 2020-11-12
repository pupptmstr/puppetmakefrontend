import React from 'react';
import SearchPagination from "./SearchPagination";
import BlogCard from "../main_page/blog/BlogCard";
import TeamCard from "../main_page/team/TeamCard";


function SearchMainTeam(props) {
    return (
        <div className='landing-page-block'>
            <h1 id={'teammates'}>Наша команда</h1>
            <SearchPagination
                data={props.array_data}
                card={(piece, idx) => <TeamCard key={idx} {...piece} />}
            />
        </div>);
}

export default SearchMainTeam;