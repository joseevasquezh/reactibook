import React, { Component } from 'react';

import Post from './components/Post'
import './App.css';



class App extends Component {
  render() {
    return (
      <Wall posts={this.props.posts} onClickPost={(id,text,visibility) => this.props.onClickPost(id,text,visibility)}/>
    );
  }
}

class Wall extends Component {
  render () {
    return (
      <div className="wall">
        <PostForm onClickPost={(id,text,visibility) => this.props.onClickPost(id,text,visibility)}/>
        {this.props.posts.map(post =>
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


export default App;
