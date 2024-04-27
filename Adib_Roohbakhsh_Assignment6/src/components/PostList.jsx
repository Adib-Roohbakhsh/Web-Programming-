import Post from "./Post";
const PostList = ({ list }) => {
  return (
    <div>
      <h2> Post List</h2>
      {list.map((post) => (
        <Post post={post} key={post.title} />
      ))}
    </div>
  );
};
export default PostList;
