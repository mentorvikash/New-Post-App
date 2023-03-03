import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Post from "./Post";
import { deletePost } from "../redux/post/postAction";

const PostList = () => {
  const posts = useSelector((state) => state.post);
  const dispatch = useDispatch();

  const handleDeletePost = (id) => {
    dispatch(deletePost(id));
  };

  return (
    <div className="post-list">
      {posts?.map((post) => (
        <Post key={post.id} post={post} onDelete={handleDeletePost} />
      ))}
    </div>
  );
};

export default PostList;
