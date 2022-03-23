import CommentForm from "../../components/formcomments/CommentForm";
import "./singlePost.css";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [categories, setCategories] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const [file, setFile] = useState("");
  const [success, setSuccess] = useState("");
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
      setCategories(res.data.categories);
    };
    getPost();
  }, [path]);
  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    const updatePost ={
      username: user.username,
        title,
        desc,
        categories,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatePost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }

    try {
      await axios.put(`/posts/${post._id}`,updatePost );
      setUpdateMode(false);
      window.location.reload();
		
    } catch (err) {}
  };

  return (
    <div className="singlePostDetails">
      <div className="singlePostDetailsWrapper">
        {!updateMode ? (
          post.photo && (
            <img src={PF + post.photo} alt="" className="singlePostImg" />
          )
        ) : (
          <div className="updateFileInput">
            <img className="singlePostImg" src={PF + post.photo} />
            <label htmlFor="fileInput">
              <i className="writeIcon fas fa-plus"></i>
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
          </div>
        )}
        {updateMode ? (
          <select
            className="writeCategorySelect"
            value={categories}
            onChange={(e) => setCategories(e.target.value)}
          >
            <option value={categories}>{categories}</option>
            <option value="Event">Event</option>
            <option value="Sports">Sports</option>
            <option value="VanLangnews">VanLangnews</option>
            <option value="Study">Study</option>
            <option value="Technical">Technical</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Programming">Programming</option>
          </select>
        ) : (
          <p className="postCategory">{post.categories}</p>
          
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
                    <span className="singlePostAuthor" >Author: 
                    <Link to={`/?user=${post.username}`} className="link">
                    <b> {post.username}</b>
                    </Link>
                   </span>
                    <span className="singPostDate">{new Date (post.createdAt).toDateString()}</span>
                </div>
                {updateMode ? (
                  <textarea className="singPostDescInput" value={desc} onChange={ (e) => setDesc(e.target.value)}/>
                   ) : (
                <p className="singlePostDesc">
                   {desc}
                </p>
                )}   
                {updateMode && (
                  <button className="singlePostButton" onClick={handleUpdate}>Update</button> 
                )} 
                
      </div>
    </div>
  );
}
