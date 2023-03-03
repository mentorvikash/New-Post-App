import { ADD_COMMENT, DELETE_COMMENT } from './ commentAction';

  // Reducers
  export const commentsReducer = (state = [], action) => {
    switch (action.type) {
      case ADD_COMMENT:
        return [...state, action.payload];
      case DELETE_COMMENT:
        return state.filter((comment) => comment.id !== action.payload.id);
      default:
        return state;
    }
  };
  