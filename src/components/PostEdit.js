import React from 'react';
import PropTypes from 'prop-types';

const PostEdit = ({text, onClickSave, onClickCancel}) => (
  <div className="card">
    <div className="card-body">
      <form onSubmit={e => { e.preventDefault()}} >
        <div className="form-group">
          <textarea
            className="form-control"
            defaultValue={text}
            ref={node => {this.input = node}}
          />
        </div>
        <div className="form-row justify-content-end">
          <button
            className="btn btn-primary"
            onClick={() => onClickSave(this.input.value)}>
            Guardar
          </button>
          <button
            className="btn btn-secondary"
            onClick={onClickCancel}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  </div>
);


PostEdit.propTypes = {
  text: PropTypes.string.isRequired,
  onClickSave: PropTypes.func.isRequired,
  onClickCancel: PropTypes.func.isRequired
}

export default PostEdit;
