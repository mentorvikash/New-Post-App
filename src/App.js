import React from "react";
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
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