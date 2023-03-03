import { v4 as uuidv4 } from 'uuid';
import { ADD_COMMENT, DELETE_COMMENT, DELETE_ALL_COMMENT } from './commentType'

// Action creators
export const addComment = ({postId, name, content}) => ({
    type: ADD_COMMENT,
    payload: {
      id: uuidv4(),
      postId,
      name,
      content,
    },
  });
  
  export const deleteComment = (id) => ({
    type: DELETE_COMMENT,
    payload: {
      id,
    },
  });

  export const deleteAllComment = (id) => ({
    type: DELETE_ALL_COMMENT,
    payload: {
      id,
    },
  });
  