import { combineReducers } from "redux";
// import cakeReducer from "./cake/cakeReducers";
// import iceCreamReducers from "./iceCream/iceCreamReducers";
// import userReducer from "./users/ userReducers";
import { postsReducer } from './post/postReducer';
import { commentsReducer } from './comment/commentReducer';

const rootReducer = combineReducers({
    // cake : cakeReducer,
    // iceCream : iceCreamReducers,
    // user: userReducer,
    post: postsReducer,
    comment: commentsReducer,
})

export default rootReducer