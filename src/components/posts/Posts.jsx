import Post from "../post/Post.jsx";
import "./posts.css";

export default function Posts(props) {
  return (
    <div className="posts">
      {props.posts.map((p) => (
        <Post post={p} />
      ))}
    </div>
  );
}