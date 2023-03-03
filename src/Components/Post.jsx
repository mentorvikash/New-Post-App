import React, {useEffect} from 'react';
import CommentForm from './CommentForm';
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from '../redux/post/postAction';
import { addComment } from '../redux/comment/commentAction';

const Post = ({ post, onDelete }) => {
  const [comments, setComments] = React.useState([]);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log(comments);
  // }, [comments])

  const addCommentfun = (comment) => {
    dispatch(addComment(comment));
    setComments([...comments, comment]);
  }

  const deleteComment = (id) => {
    const copyOfComments = [...comments]
    const updatedComments = copyOfComments.filter((comment) => comment.postId !== id);
    setComments(updatedComments);
  };


  // create a random number
  const id = Math.floor(Math.random() * 1000);

  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button onClick={() => onDelete(post.id)}>Delete</button>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.postId}>
            <strong>{comment.name}</strong> {comment.content}{' '}
            <button onClick={() => deleteComment(comment.postId)}>Delete</button>
          </li>
        ))}
      </ul>
      <CommentForm postId={post.id + id} onComment={addCommentfun} />
    </div>
  );
};

export default Post;
