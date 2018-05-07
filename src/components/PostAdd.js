import React from 'react';
import PropTypes from 'prop-types';

const PostAdd = ({onAddPost}) => {

  let input;
  let select;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          onAddPost(input.value, select.value)
          input.value = ''
        }}
      >
        <input
          ref={node => {input = node}}
        />
        <select ref={node => {select = node}}>
          <option value="public">Público</option>
          <option value="friends" >Amigos</option>
        </select>
        <button type="submit">
          Publicar
        </button>
      </form>
    </div>
  )
};


PostAdd.propTypes = {
  onAddPost: PropTypes.func.isRequired
}

export default PostAdd;