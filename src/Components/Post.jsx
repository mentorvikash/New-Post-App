import React from 'react';
import CommentForm from './CommentForm';
import {useDispatch, useSelector } from "react-redux";
import { addComment ,  } from '../redux/comment/commentAction';
import { deleteComment } from '../redux/comment/commentAction';

const Post = ({ post, onDelete }) => {
  const dispatch = useDispatch();
  const comments = useSelector(state => state.comment)

  const addCommentfun = (comment) => {
    dispatch(addComment(comment));
  }

  const deleteCommentfun = (id) => {
    dispatch(deleteComment(id));
  };

  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button onClick={() => onDelete(post.id)}>Delete</button>
      <h3>Comments</h3>
      <ul>
        {comments.filter(el => el.postId === post.id).map((comment) => (
          <li key={comment.id}>
            <strong>{comment.name}</strong> {comment.content}{' '}
            <button onClick={() => deleteCommentfun(comment.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <CommentForm postId={post.id} onComment={addCommentfun} />
    </div>
  );
};

export default Post;
