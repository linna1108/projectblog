import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";

  return (
    <div className="post">
      <div className="postWrapper">
        {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}

        <div className="postInfo">
          <Link to={`/post/${post._id}`} className="link">
            <h3 className="postTitle">{post.title}</h3>
          </Link>
          <span className="postAuth">Author: {post.username}</span>
          <span className="postDate">
            {new Date(post.createdAt).toDateString()}
          </span>
          <div className="postDesc">
            <p>{post.desc}</p>
          </div>
          <div className="btnShow">
              <a href={`/post/${post._id}`} className="show link">READ MORE</a>           
          </div>
        </div>
      </div>
    </div>
  );
}
