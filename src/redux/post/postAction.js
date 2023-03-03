import { v4 as uuidv4 } from 'uuid';
import { ADD_POST, DELETE_POST  } from './postType'

// Action creators
export const addPost = (title, content) => ({
    type: ADD_POST,
    payload: {
      id: uuidv4(),
      title,
      content,
    },
  });
  
  export const deletePost = (id) => ({
    type: DELETE_POST,
    payload: {
      id,
    },
  });