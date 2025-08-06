import { Link } from "react-router-dom";
import "./Post.css";

export default function Post({ id, img, title, desc }) {
  return (
    <Link to={`/post/${id}`} className="link">
    <div className="post">
      <img className="postImg" src={img} alt={title} />
      <div className="postInfo">
        <span className="postTitle">
          
            {title}
          
        </span>
      </div>
      <p className="postDesc">{desc}</p>
    </div>
    </Link>
  );
}
