import { useState } from "react";
import "./post-model.css";
const PostModal = ({ posts, setPosts, setShowAddDialog }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [date, setDate] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !body || !date) {
      alert("Please fill in all fields");
      return;
    }
    const newPost = [...posts, { title: title, body: body, date: date }];
    setPosts(newPost);
    console.log(newPost);
    setTitle("");
    setBody("");
    setDate("");
    setShowAddDialog(false);
  };

  return (
    <div className="post-model-container">
      <h2>Post Details</h2>
      <form className="post-model-form">
        <input
          placeholder="Title"
          type="text"
          id="title"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          placeholder="Date"
          type="date"
          id="date"
          name="date"
          onChange={(e) => setDate(e.target.value)}
        />
        <br />
        <textarea
          placeholder="Body"
          id="body"
          name="body"
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <br />
        <button className="add-buttun" type="submit" onClick={submit}>
          ADD
        </button>
        <button
          className="close-buttun"
          type="close"
          onClick={setShowAddDialog}
        >
          close
        </button>
      </form>
    </div>
  );
};

export default PostModal;
