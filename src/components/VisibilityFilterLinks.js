import React from 'react';
import PropTypes from 'prop-types';
import {VisibilityFilters} from '../Actions';
import FilterLink from './FilterLink';

const VisibilityFilterLinks = ({currentVisibilityFilter, onClickFilter}) => {
  return (
    <p>
      <FilterLink
        filter={VisibilityFilters.SHOW_PUBLIC}
        onClickFilter={() => onClickFilter(VisibilityFilters.SHOW_PUBLIC)}
        visibilityFilter = {currentVisibilityFilter}
      >
        Público
      </FilterLink>
      {' '}
      <FilterLink
        filter={VisibilityFilters.SHOW_FRIENDS_ONLY}
        onClickFilter={() => onClickFilter(VisibilityFilters.SHOW_FRIENDS_ONLY)}
        visibilityFilter = {currentVisibilityFilter}
      >
        Amigos
      </FilterLink>
    </p>
  )

}

VisibilityFilterLinks.propTypes = {
  currentVisibilityFilter: PropTypes.string.isRequired,
  onClickFilter: PropTypes.func.isRequired
}

export default VisibilityFilterLinks;