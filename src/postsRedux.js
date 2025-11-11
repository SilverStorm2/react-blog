// selectors
export const getAllPosts = ({ posts }) => posts;
export const getPostById = ({ posts }, id) =>
  posts.find(post => post.id === id);

// actions
const createActionName = actionName => `app/posts/${actionName}`;
const REMOVE_POST = createActionName('REMOVE_POST');

// action creators
export const removePost = id => ({ type: REMOVE_POST, payload: id });

const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case REMOVE_POST:
      return statePart.filter(post => post.id !== action.payload);
    default:
      return statePart;
  }
};

export default postsReducer;
