import PostModal from "./PostModal";
import "./dialog.css";
const Dialog = ({ status, posts, setPosts, setShowAddDialog }) => {
  return (
    <div>
      {status && (
        <dialog open className="dialog">
          <PostModal
            posts={posts}
            setPosts={setPosts}
            setShowAddDialog={setShowAddDialog}
          />
        </dialog>
      )}
    </div>
  );
};
export default Dialog;
