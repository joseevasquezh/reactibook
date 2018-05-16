import React from 'react';
import VisiblePostList from '../containers/VisiblePostList';
import PostAdd from '../components/PostAdd';
import VisibilityFilterLinks from '../components/VisibilityFilterLinks';


class Wall extends React.Component {
  render () {
    return (
      <div className="row">
        <div className="col">
          <h1> Reactibook </h1>
          <PostAdd />
          <VisibilityFilterLinks />
          <VisiblePostList />
        </div>
      </div>
    );
  }
}

export default Wall;
