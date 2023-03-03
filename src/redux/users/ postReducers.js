import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
} from "./postType";
import {
  CREATE_POST,
  CREATE_COMMENT,
  DELETE_ALL_COMMENT,
  DELETE_SINGLE_COMMENT,
  DELETE_SINGLE_POST,
  DELETE_ALL_POST,
} from "./postType";

const initialState = {
    post: [],
    comments: [],
}


const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // 
      case CREATE_POST:
        return {
          loding: false,
          userData: action.payload,
          error: "",
        };
    default:
      return state;
  }
};

export default userReducer;


    // case FETCH_USER_REQUEST:
    //   return {
    //     ...state,
    //     loding: true,
    //   };
    // case FETCH_USER_SUCCESS:
    //   return {
    //     loding: false,
    //     userData: action.payload,
    //     error: "",
    //   };
    // case FETCH_USER_ERROR:
    //   return {
    //     loding: false,
    //     userData: [],
    //     error: action.payload.message,
    //   };