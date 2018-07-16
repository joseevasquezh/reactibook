import React from 'react';
import PropTypes from 'prop-types';

const PostView = ({text, onClickEdit, onClickDelete}) => (
  <div className="card">
    <div className="card-body">
      <p>
        {text}
      </p>
      <div className="text-right">
        <button
          className="btn btn-link"
          onClick={onClickEdit}>
          Editar
        </button>
        <button
          className="btn btn-link"
          onClick={() => {
            if (window.confirm("Esta operacion no puede ser revertida. ¿Desea continuar?")) {
              onClickDelete()
            }
          }}>
          Eliminar
        </button>
      </div>
    </div>
  </div>
);


PostView.propTypes = {
  text: PropTypes.string.isRequired,
  onClickEdit: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired
}

export default PostView;
