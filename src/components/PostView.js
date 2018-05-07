import React from 'react';
import PropTypes from 'prop-types';

const PostView = ({text, onClickEdit, onClickDelete}) => (
  <div>
    <p>
      {text}
    </p>
    <button onClick={onClickEdit}>
      Editar
    </button>
    <button  onClick={onClickDelete}>
      Eliminar
    </button>
  </div>
);


PostView.propTypes = {
  text: PropTypes.string.isRequired,
  onClickEdit: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired
}

export default PostView;
