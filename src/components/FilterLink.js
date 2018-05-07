import React from 'react';
import PropTypes from 'prop-types';
import Link from './Link';

const FilterLink = ({filter, children, onClickFilter, visibilityFilter}) => {
  return (
    <Link
      active={(filter === visibilityFilter)}
      children={children}
      onClick={() => {onClickFilter()}} />
  )
}

FilterLink.propTypes = {
  filter: PropTypes.string.isRequired,
  visibilityFilter: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClickFilter: PropTypes.func.isRequired
}

export default FilterLink