import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const PostList = ({posts, onClickSave, onClickDelete}) => (
  <div>
    {posts.map(post =>
      <Post
        key={post.id}
        id={post.id}
        text={post.text}
        onClickSave={ (text) => onClickSave(post.id, text) }
        onClickDelete={ ()=> onClickDelete(post.id) }
      />
    )}
  </div>
);


PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  onClickSave: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired
}

export default PostList;