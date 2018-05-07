import React, { Component } from 'react';

import Post from './components/Post'
import Link from './components/Link'

import './App.css';

import {
  addPost,
  editPost,
  setVisibilityFilter,
  VisibilityFilters,
} from './Actions';

class App extends Component {
  render() {
    return (
      <Wall
        store={this.props.store}
        onClickFilter={(filter) => {
          this.props.store.dispatch(setVisibilityFilter(filter));
        }}
        onClickPost={(id,text,visibility) => {
          this.props.store.dispatch(addPost(id,text,(visibility === 'friends' ? false : true)));
        }}/>
    );
  }
}

class Wall extends Component {
  render () {
    const visiblePosts = GetVisiblePosts(this.props.store.getState().posts, this.props.store.getState().visibilityFilter);
    return (
      <div className="wall">
        <PostForm onClickPost={(id,text,visibility) => this.props.onClickPost(id,text,visibility)}/>
        <p>
          <FilterLink onClickFilter={(filter) => this.props.onClickFilter(filter)} filter={VisibilityFilters.SHOW_PUBLIC} visibilityFilter = {this.props.store.getState().visibilityFilter}>
            Publico
          </FilterLink>
          {' '}
          <FilterLink  onClickFilter={(filter) => this.props.onClickFilter(filter)} filter={VisibilityFilters.SHOW_FRIENDS_ONLY} visibilityFilter = {this.props.store.getState().visibilityFilter}>
            Amigos
          </FilterLink>
        </p>
        {visiblePosts.map(post =>
          <Post
          key={post.id}
          id={post.id}
          text={post.text}
          onClickSave={ ()=> console.log('save clicked') }
          onClickDelete={ ()=> console.log('delete clicked') }
          />
        )}
      </div>
    );
  }
}

let nextPostId = 0;
class PostForm extends Component {
  render () {
    return (
      <div>
        <form
            onSubmit={e => { e.preventDefault()
        }}>
          <input
            ref={node => {this.input = node}}
          />
          <select ref={node => {this.select = node}}>
            <option value="public">Publico</option>
            <option value="friends" >Amigos</option>
          </select>
          <button onClick={()=>this.props.onClickPost(nextPostId++, this.input.value, this.select.value)}>
            Publicar
          </button>
        </form>
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

const FilterLink = ({filter, children, onClickFilter, visibilityFilter}) => {
  return (
    <Link
      active={(filter === visibilityFilter)}
      children={children}
      onClick={() => {onClickFilter(filter)}} />
  )
}


export default App;
