import React from 'react';
import SearchPagination from "./SearchPagination";
import ProjectCard from "../main_page/projects/ProjectsCard";


function SearchMainProject(props) {
    const {array_data} = props;
    console.log(array_data);
    return (
        <div className='landing-page-block'>
            <h1 id={'projects'}>Проекты</h1>
            <SearchPagination
                inputData={array_data}
                card={(piece, idx) => <ProjectCard key={idx} {...piece} />}
            />
        </div>);
}

export default SearchMainProject;