import React from 'react';
import SearchPagination from "./SearchPagination";
import TeamCard from "../main_page/team/TeamCard";


function SearchMainTeam(props) {
    const {array_data} = props;
    console.log(array_data);
    return (
        <div className='landing-page-block'>
            <h1 id={'teammates'}>Наша команда</h1>
            <SearchPagination
                inputData={array_data}
                card={(piece, idx) => <TeamCard key={idx} {...piece} />}
            />
        </div>);
}

export default SearchMainTeam;