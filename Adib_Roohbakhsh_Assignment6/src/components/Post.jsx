import "./post.css";
const Post = ({ post }) => {
  return (
    <div className="post-container" key={post.name}>
      <div className="post-title">Title: {post.title}</div>
      <div className="post-date">Date: {post.date} </div>
      <div className="post-body">Body: {post.body}</div>
    </div>
  );
};
export default Post;
