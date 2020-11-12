import React from 'react';
import Pagination from '../../shared/Pagination';
import ProjectCard from "./ProjectsCard";


function MainProject() {
    return (
        <div className='landing-page-block'>
            <h1 id={'projects'}>Проекты</h1>
            <Pagination
                url='projects'
                card={(piece, idx) => <ProjectCard key={idx} {...piece} />}
            />
        </div>);
}

export default MainProject;