import React from 'react';
import Pagination from '../../shared/Pagination';
import TeamCard from './TeamCard';


const MainTeam = () =>
  <Pagination
    card={(piece, idx) => <TeamCard key={idx} {...piece} />}
    title='Наша команда'
    url='teammates'
  />;

export default MainTeam;