import React, {useEffect} from 'react';
import CommentForm from './CommentForm';

const Post = ({ post, onDelete }) => {
  const [comments, setComments] = React.useState([]);
  
  useEffect(() => {
    console.log(comments);
  }, [comments])

  const addComment = (comment) => {
    setComments([...comments, comment]);
  }

  const deleteComment = (id) => {
    const copyOfComments = [...comments]
    const updatedComments = copyOfComments.filter((comment) => comment.postId !== id);
    setComments(updatedComments);
  };

  const deletePost = () => {
    onDelete(post.id);
  };

  // create a random number
  const id = Math.floor(Math.random() * 1000);

  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button onClick={deletePost}>Delete</button>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.postId}>
            <strong>{comment.name}</strong> {comment.content}{' '}
            <button onClick={() => deleteComment(comment.postId)}>Delete</button>
          </li>
        ))}
      </ul>
      <CommentForm postId={post.id + id} onComment={addComment} />
    </div>
  );
};

export default Post;
