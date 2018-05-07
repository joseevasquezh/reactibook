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

  render() {
    if (this.state.editMode) {
      return(
        <PostEdit
          text={this.props.text}
          onClickSave={this.props.onClickSave}
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
