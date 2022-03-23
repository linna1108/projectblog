import "./sidebar.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cats, setCats] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  });

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts");
      setPosts(res.data);
    };
    fetchPosts();
  });
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span>RECENT POSTS</span>
        
        <div className="recentPost">
          {posts.map((post) => (
          <Link to ={`/post/${post._id}`} className="link">
            <div className="recentPost">
              <h3>{post.title}</h3>
              <span>{new Date(post.createdAt).toDateString()}</span>
            </div> 
          </Link> 
          ))}
        </div>
        
      </div>
      <div className="sidebarItem1">
        <span>SOCIAL NETWORK</span>
      </div>
    </div>
  );
}
