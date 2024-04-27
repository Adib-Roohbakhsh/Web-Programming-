import { useState } from "react";
import Dialog from "./Dialog";
import PostList from "./PostList";
import AddButton from "./AddButton";
import "./my-blog.css";
import SortPosts from "./SortPosts";
const MyBlog = () => {
  const postList = [
    { title: "Banana", body: "Banana is good for health", date: "5/10/2024" },
    { title: "Apple", body: "Apple is good for health", date: "3/10/2022" },
    { title: "Orange", body: "Orange is good for health", date: "4/12/2024" },
    { title: "Carrot", body: "Carrot is good for health", date: "2/10/2021" },
  ];

  const [dialogStatus, setShowAddDialog] = useState(false);
  const [posts, setPosts] = useState(postList);
  const [sortValue, setSortValue] = useState("Title");

  const sortHandler = () => {
    if (sortValue === "Title") {
      posts.sort((a, b) => {
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();
        return titleA.localeCompare(titleB);
      });
    } else if (sortValue === "Date") {
      posts.sort((a, b) => new Date(a.date) - new Date(b.date));
    }
  };

  sortHandler();

  return (
    <div className="container">
      <h1> Adib Blog</h1>
      <div>
        <SortPosts onSortValue={setSortValue} />
        <AddButton setShowAddDialog={setShowAddDialog} />
      </div>
      <PostList list={posts} />
      <Dialog
        status={dialogStatus}
        posts={posts}
        setPosts={setPosts}
        setShowAddDialog={setShowAddDialog}
      />
    </div>
  );
};
export default MyBlog;
