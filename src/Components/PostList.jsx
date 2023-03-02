import React from 'react';
import Post from './Post';

const PostList = ({ posts, onDelete }) => {
  const handleDelete = (id) => {
    onDelete(id);
  };

  return (
    <div className="post-list">
      {posts.map((post) => (
        <Post key={post.id} post={post} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default PostList;
