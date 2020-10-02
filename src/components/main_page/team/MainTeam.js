import React from 'react';
import { mockMembers } from '../../../mockData';
import Pagination from '../../shared/Pagination';
import TeamCard from './TeamCard';


const MainTeam = () =>
  <Pagination
    card={(piece, idx) => <TeamCard key={idx} {...piece} />}
    title='Наша команда'
    url='teammateses'
    initialData={mockMembers}
  />;

export default MainTeam;