import {
  CREATE_POST,
  DELETE_SINGLE_POST,
  CREATE_COMMENT,
  DELETE_SINGLE_COMMENT,
  DELETE_ALL_COMMENT,
  DELETE_ALL_POST
} from "./postType";

export const createPost = (body) => {
    return {
        type: CREATE_POST,
        payload: {
            id: 1,
            title: "test",
            body: "test"
        }
    }
} 

export const deletePost = () => {
    return {
        type: DELETE_SINGLE_POST,
        payload: {
            id: 1
        }
    }
}

export const createComment = () => {
    return {
        type: CREATE_COMMENT,
        payload: {
            id: 1
        }
    }
}


export const deleteComment = () => {
    return {
        type: DELETE_SINGLE_COMMENT,
        payload: {
            id: 1
        }
    }
}

export const deleteAllComment = () => { 
    return {
        type: DELETE_ALL_COMMENT,
    }
}

export const deleteAllPost = () => {
    return {
        type: DELETE_ALL_POST,
    }
}