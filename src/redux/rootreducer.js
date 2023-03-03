import { combineReducers } from "redux";
import { postsReducer } from './post/postReducer';
import { commentsReducer } from './comment/commentReducer';

const rootReducer = combineReducers({
    post: postsReducer,
    comment: commentsReducer,
})

export default rootReducer