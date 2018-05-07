import React from 'react';
import PropTypes from 'prop-types';
import PostView from './PostView';
import PostEdit from './PostEdit';


class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
    }
  }

  goToEditMode() {
    this.setState({
      editMode: true
    });
  }

  goToViewMode() {
    this.setState({
      editMode: false
    });
  }

  savePost(text) {
    this.props.onClickSave(text);
    this.goToViewMode();
  }

  render() {
    if (this.state.editMode) {
      return(
        <PostEdit
          text={this.props.text}
          onClickSave={(text) => this.savePost(text)}
          onClickCancel={() => this.goToViewMode()}/>
      )
    }
    else
    {
      return(
        <PostView
          text={this.props.text}
          onClickEdit={() => this.goToEditMode()}
          onClickDelete={this.props.onClickDelete}
        />
      )
    }
  }
}



Post.propTypes = {
  text: PropTypes.string.isRequired,
  onClickSave: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired
}

export default Post;
