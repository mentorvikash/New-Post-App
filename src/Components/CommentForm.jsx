import React from 'react';

const CommentForm = ({ postId, onComment }) => {
  const [name, setName] = React.useState('');
  const [content, setContent] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onComment({ postId, name, content });
    setName('');
    setContent('');
  };

  return (
    <div className="comment-form">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Comment:
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

export default CommentForm;
