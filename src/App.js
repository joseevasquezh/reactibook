import React, { Component } from 'react';
import PostList from './components/PostList'
import PostAdd from './components/PostAdd'
import VisibilityFilterLinks from './components/VisibilityFilterLinks'
import './App.css';
import {
  addPost,
  editPost,
  deletePost,
  setVisibilityFilter,
  VisibilityFilters,
} from './Actions';


class App extends Component {
  render() {
    return (
      <Wall store={this.props.store}/>
    );
  }
}

let nextPostId = 0;
class Wall extends Component {
  render () {
    const visiblePosts = GetVisiblePosts(this.props.store.getState().posts, this.props.store.getState().visibilityFilter);
    return (
      <div className="wall">
        <PostAdd onAddPost={(text,visibility) =>
          this.props.store.dispatch(addPost(nextPostId++,text,(visibility === 'friends' ? false : true)))}/>
        <VisibilityFilterLinks
          onClickFilter={(filter) => this.props.store.dispatch(setVisibilityFilter(filter))}
          currentVisibilityFilter = {this.props.store.getState().visibilityFilter}
        />
        <PostList
          posts={visiblePosts}
          onClickSave={ (id, text)=> this.props.store.dispatch(editPost(id, text)) }
          onClickDelete={ (id)=> this.props.store.dispatch(deletePost(id)) }
        />
      </div>
    );
  }
}


const GetVisiblePosts = (posts, filter) => {
  switch (filter){
    case(VisibilityFilters.SHOW_PUBLIC):
      return posts;
    case(VisibilityFilters.SHOW_FRIENDS_ONLY):
      return posts.filter(t => !t.isPublic);
    default:
      return posts;
  }
}


export default App;
