import { ADD_COMMENT, DELETE_COMMENT, DELETE_ALL_COMMENT } from "./commentType";

// Reducers
export const commentsReducer = (state = [], action) => {
  console.log(action.payload);
  switch (action.type) {
    case ADD_COMMENT:
      return [...state, action.payload];
    case DELETE_COMMENT:
      return state.filter((comment) => comment.id !== action.payload.id);
    case DELETE_ALL_COMMENT:
      return state.filter((comment) => comment.postId !== action.payload.id);
    default:
      return state;
  }
};
