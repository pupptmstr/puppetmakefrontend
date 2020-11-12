import React from 'react';
import SearchPagination from "./SearchPagination";
import ProjectCard from "../main_page/projects/ProjectsCard";


function SearchMainProject(props) {
    return (
        <div className='landing-page-block'>
            <h1 id={'projects'}>Проекты</h1>
            <SearchPagination
                data={props.array_data}
                card={(piece, idx) => <ProjectCard key={idx} {...piece} />}
            />
        </div>);
}

export default SearchMainProject;