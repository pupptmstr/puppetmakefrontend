import React from 'react';
import Pagination from '../../shared/Pagination';
import TeamCard from './TeamCard';

function MainTeam() {
  return (
      <div className='landing-page-block'>
        <h1 id={'team'}>Наша команда</h1>
        <Pagination
            url='teammates'
            card={(piece, idx) => <TeamCard key={idx} {...piece} />}
        />
      </div>);
}


export default MainTeam;