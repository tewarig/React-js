import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import http from "./services/httpservice";
import * as Sentry from "@sentry/react";
import config from "./config.json";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

Sentry.init({
  dsn:
    "https://806eeea127b440bc9a260f23d12e5ecb@o433172.ingest.sentry.io/5387830",
});

// const config.apiEndPoint = "https://jsonplaceholder.typicode.com/posts";
class App extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    //promise >> resolve (sucess or rejected)
    // const response = await http.get(
    //   "https://jsonplaceholder.typicode.com/posts"
    // );

    // console.log(response);
    const { data: posts } = await http.get(config.apiEndPoint);
    this.setState({ posts });
  }

  handleAdd = async () => {
    const obj = { title: "a", body: "b" };
    const { data: post } = await http.post(config.apiEndPoint, obj);
    const posts = [post, ...this.state.posts];
    this.setState({ posts });
    // console.log(post);
  };

  handleUpdate = async (post) => {
    post.title = "UPDATED";
    await http.put(config.apiEndPoint + "/" + post.id, post);
    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    posts[index] = { ...posts };
    this.setState({ posts });
  };

  handleDelete = async (post) => {
    const originalPosts = this.state.posts;
    const posts = this.state.posts.filter((p) => p.id !== post.id);
    this.setState({ posts });
    try {
      await http.delete(config.apiEndPoint + post.id);
      // throw new Error("oye");
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        alert("This post has already been deleted");
      } else {
        alert("something failed while deleting the post");
        this.setState({ posts: originalPosts });
      }
    }
  };

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <button className="btn btn-primary" onClick={this.handleAdd}>
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post) => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => this.handleUpdate(post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default App;
