import "./sort-post.css";
const SortPosts = ({ onSortValue }) => {
  const changeHandler = (event) => {
    onSortValue(event.target.value);
  };
  return (
    <select className="sort" name="sort" onChange={changeHandler}>
      <option value="Title">Title</option>
      <option value="Date">Date</option>
    </select>
  );
};

export default SortPosts;
