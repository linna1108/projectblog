import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Footer from "../../components/footer/Footer";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import { useEffect, useState,useContext } from "react";
import { useLocation} from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router";

export default function Profile() {
  const [user, setUser] = useState({});
  const username = useParams().username;
  const { search } = useLocation();
  const [posts, setPosts] = useState([]);
  const PF = "http://localhost:5000/images/"
    useEffect(() => {
        const fetchUser = async () => {
          const res = await axios.get(`/users?username=${username}`);
          setUser(res.data);
        };
        fetchUser();
      }, []);

      useEffect(() => {
        const fetchPosts = async () => {
          try {
            const res = await axios.get("/posts/profile/" + username);
            setPosts(res.data);
          } catch (error) {}
        };
        fetchPosts();
      }, [search]);

  return (
    <>
      <Topbar />
      <div className="profile">
        <div className="profileWrapper">
          <div className="profileTop">
            <img
              className="banner"
              src="https://img4.thuthuatphanmem.vn/uploads/2020/12/25/banner-design-background-blue_060828775.jpg"
              alt=""
            />
            <img
              className="profileUserImg"
              src={PF + user.profilePic}
              alt=""
            />
          </div>
          <div className="profileInfo">
            <h4 className="profileInfoName">{user.username}</h4>
            <span className="profileInfoDesc">{user.email}</span>
          </div>
          <div className="profilePost">
            <Posts posts = {posts}/>        
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
