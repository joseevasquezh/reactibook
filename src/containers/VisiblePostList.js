import { connect } from 'react-redux';
import { updatePost, destroyPost, VisibilityFilters } from '../Actions';
import PostList from '../components/PostList';

const GetVisiblePosts = (posts, filter) => {
  switch (filter){
    case(VisibilityFilters.SHOW_PUBLIC):
      return posts;
    case(VisibilityFilters.SHOW_FRIENDS_ONLY):
      return posts.filter(t => !t.isPublic);
    default:
      return posts;
  }
};

const mapStateToProps = (state) => {
  return {
    posts: GetVisiblePosts(state.posts, state.visibilityFilter)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickSave: (id, text) => {
      dispatch(updatePost(id, text))
    },
    onClickDelete: (id) => {
      dispatch(destroyPost(id))
    }
  }
};

const VisiblePostList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);

export default VisiblePostList;
