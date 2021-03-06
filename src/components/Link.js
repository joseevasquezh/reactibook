import React from 'react';
import PropTypes from 'prop-types';

const Link = ({active, children, onClick }) => {
  return (
    <a
      href=""
      className={(active ? "btn btn-link disabled" : "btn btn-link " )}
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link