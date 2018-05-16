import React from 'react';
import VisiblePostList from '../containers/VisiblePostList';
import PostAdd from '../components/PostAdd';
import VisibilityFilterLinks from '../components/VisibilityFilterLinks';
import { addPost } from '../Actions';


let nextPostId = 0;
class Wall extends React.Component {
  render () {
    return (
      <div className="row">
        <div className="col">
          <h1> Reactibook </h1>
          <PostAdd onAddPost={(text,visibility) =>
            this.props.store.dispatch(addPost(nextPostId++,text,(visibility === 'friends' ? false : true)))}/>
          <VisibilityFilterLinks store = {this.props.store} />
          <VisiblePostList store = {this.props.store} />
        </div>
      </div>
    );
  }
}

export default Wall;
