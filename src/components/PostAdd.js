import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../Actions';

let PostAdd = ({dispatch}) => {

  let input;
  let select;

  return (
    <div className="card">
      <div className="card-body">
        <form
          onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }
            dispatch(createPost(input.value, (select.value === 'friends' ? false : true)))
            input.value = ''
          }}
        >
          <div className="form-group">
            <textarea
              className="form-control"
              placeholder="¿Qué está pasando?"
              ref={node => {input = node}}
            />
          </div>
          <div className="form-row justify-content-end">
            <div className="col-3">
              <select
                className="form-control"

                ref={node => {select = node}}>
                <option value="public">Público</option>
                <option value="friends" >Amigos</option>
              </select>
            </div>
            <div className="col-auto">
              <button
                className="btn btn-primary"
                type="submit">
                Publicar
              </button>
              </div>
          </div>

        </form>
      </div>
    </div>
  )
};

PostAdd = connect ()(PostAdd);

export default PostAdd;