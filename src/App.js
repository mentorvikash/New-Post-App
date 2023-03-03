import React from "react";
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  // const [posts, setPosts] = React.useState([
  //   { id: 1, title: 'First Post', content: 'This is my first post' },
  //   { id: 2, title: 'Second Post', content: 'This is my second post' },
  // ]);

  // const addPost = (post) => {
  //   const newPost = { id: Date.now(), ...post };
  //   setPosts([...posts, newPost]);
  // };

  // const deletePost = (id) => {
  //   const updatedPosts = posts.filter((post) => post.id !== id);
  //   setPosts(updatedPosts);
  // };

  return (
    <Provider store={store}>
      <div className="App">
        <PostForm />
        <PostList />
      </div>
    </Provider>
  );
};

export default App;


// <PostList posts={posts} onDelete={deletePost} />
// <PostForm onSubmit={addPost} />