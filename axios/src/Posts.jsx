import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [editId, setEditId] = useState(null);
  useEffect(() => {
    axios.get(API_URL).then((res) => setPosts(res.data));
  }, []);

  const addPost = () => {
    if (!title || !body) {
      alert("Fields should not be empty");
      return;
    }

    axios
      .post(API_URL, {
        title,
        body,
        userId: 1,
      })
      .then((res) => {
        setPosts([...posts, res.data]);
        setBody("");
        setTitle("");
      });
  };

  const deletePost = (id) => {
    axios
      .delete(`${API_URL}/${id}`)
      .then(() => setPosts(posts.filter((p) => p.id !== id)));
  };

  const editStart = (post) => {
    setEditId(post.id);
    setBody(post.body);
    setTitle(post.title);
  };
  // const editPost = (id)=>
  // {
  //     return()
  // }
  return (
    <div>
      <h3>Post List</h3>
      <table border="2">
        <thead>
          <tr>
            <td>ID</td>
            <td>Title</td>
            <td>Body</td>
          </tr>
        </thead>

        <tbody>
          {posts.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.title}</td>
              <td>{p.body}</td>
              <td>
                {editId==null?
                (<>                  <Button
                    onClick={() => editStart(p)}
                    className="btn btn-primary"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => deletePost(p.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </Button></>)
                }
                :               (<>
                <Button>
                    Update
                  </Button>
                  <Button>
                    Cancel
                  </Button></>)
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <td></td>

            <td>
              <input
                className="form-control"
                placeholder="Enter title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </td>

            <td>
              <input
                className="form-control"
                placeholder="Enter body"
                value={body}
                onChange={(e) => {
                  setBody(e.target.value);
                }}
              />
            </td>
            <td>
              <Button onClick={addPost} className="btn btn-primary">
                Add
              </Button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Posts;
