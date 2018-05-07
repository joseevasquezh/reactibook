import React from 'react';
import PropTypes from 'prop-types';

const PostEdit = ({text, onClickSave, onClickCancel}) => (
  <div>
    <form >
      <input defaultValue={text}/>
      <button onClick={onClickSave}>
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
