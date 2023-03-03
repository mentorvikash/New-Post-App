import { ADD_POST, DELETE_POST, DELETE_ALL_POST } from "./postType";
import { deleteComment } from "../comment/commentAction";
import { useDispatch } from "react-redux";


// Reducers
export const postsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_POST:
      return [...state, action.payload];
    case DELETE_POST: {
      return state.filter((post) => post.id !== action.payload.id);
    }
    case DELETE_ALL_POST: {
      return [];
    }
    default:
      return state;
  }
};
