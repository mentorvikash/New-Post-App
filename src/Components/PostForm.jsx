import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addPost } from '../redux/post/postAction';


const PostForm = ({ onSubmit }) => {
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost({ title, content }))
    // onSubmit({ title, content }); 
    setTitle('');
    setContent('');
  };

  return (
    <div className="post-form">
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Content:
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostForm;
