import React from 'react';
import PropTypes from 'prop-types';

const PostEdit = ({text, onClickSave, onClickCancel}) => (
  <div>
    <form onSubmit={e => { e.preventDefault()}} >
      <input
        defaultValue={text}
        ref={node => {this.input = node}}
      />
      <button onClick={() => onClickSave(this.input.value)}>
        Guardar
      </button>
      <button  onClick={onClickCancel}>
        Cancelar
      </button>
    </form>
  </div>
);


PostEdit.propTypes = {
  text: PropTypes.string.isRequired,
  onClickSave: PropTypes.func.isRequired,
  onClickCancel: PropTypes.func.isRequired
}

export default PostEdit;
