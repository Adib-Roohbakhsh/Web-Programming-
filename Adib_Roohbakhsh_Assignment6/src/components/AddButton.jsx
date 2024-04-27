import "./add-button.css";
const AddButton = ({ setShowAddDialog }) => {
  return (
    <button className="add_button" onClick={() => setShowAddDialog(true)}>
      Add Post
    </button>
  );
};
export default AddButton;
