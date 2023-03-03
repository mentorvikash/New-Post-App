// import { createStore, combineReducers } from 'redux';
// import { v4 as uuidv4 } from 'uuid';

// // Action types
// const ADD_POST = 'ADD_POST';
// const DELETE_POST = 'DELETE_POST';
// const ADD_COMMENT = 'ADD_COMMENT';
// const DELETE_COMMENT = 'DELETE_COMMENT';

// // Action creators
// export const addPost = (title, content) => ({
//   type: ADD_POST,
//   payload: {
//     id: uuidv4(),
//     title,
//     content,
//   },
// });

// export const deletePost = (id) => ({
//   type: DELETE_POST,
//   payload: {
//     id,
//   },
// });

// export const addComment = (postId, name, content) => ({
//   type: ADD_COMMENT,
//   payload: {
//     id: uuidv4(),
//     postId,
//     name,
//     content,
//   },
// });

// export const deleteComment = (id) => ({
//   type: DELETE_COMMENT,
//   payload: {
//     id,
//   },
// });

// // Reducers
// const postsReducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD_POST:
//       return [...state, action.payload];
//     case DELETE_POST:
//       return state.filter((post) => post.id !== action.payload.id);
//     case ADD_COMMENT:
//     case DELETE_COMMENT:
//       return state.map((post) => {
//         if (post.id === action.payload.postId) {
//           return {
//             ...post,
//             comments: commentsReducer(post.comments, action),
//           };
//         }
//         return post;
//       });
//     default:
//       return state;
//   }
// };

// const commentsReducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD_COMMENT:
//       return [...state, action.payload];
//     case DELETE_COMMENT:
//       return state.filter((comment) => comment.id !== action.payload.id);
//     default:
//       return state;
//   }
// };

// const rootReducer = combineReducers({
//   posts: postsReducer,
// });

// // Store
// const store = createStore(rootReducer);

// export default store;
