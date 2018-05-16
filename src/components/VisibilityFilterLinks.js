import React from 'react';
import {VisibilityFilters} from '../Actions';
import FilterLink from '../containers/FilterLink';

const VisibilityFilterLinks = ({store}) => {
  return (
    <p>
      <FilterLink filter={VisibilityFilters.SHOW_PUBLIC} store={store} >
        Público
      </FilterLink>
      {' '}
      <FilterLink filter={VisibilityFilters.SHOW_FRIENDS_ONLY} store={store} >
        Amigos
      </FilterLink>
    </p>
  )
}

export default VisibilityFilterLinks;
