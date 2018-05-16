import React from 'react';
import {VisibilityFilters} from '../Actions';
import FilterLink from '../containers/FilterLink';

const VisibilityFilterLinks = () => {
  return (
    <p>
      <FilterLink filter={VisibilityFilters.SHOW_PUBLIC} >
        Público
      </FilterLink>
      {' '}
      <FilterLink filter={VisibilityFilters.SHOW_FRIENDS_ONLY} >
        Amigos
      </FilterLink>
    </p>
  )
}

export default VisibilityFilterLinks;
