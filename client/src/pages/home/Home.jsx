import "./home.css"
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Topbar from "../../components/topbar/Topbar";
import { Link } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  const [categories, setCategories] = useState([]);
 

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  
  useEffect(() => {
    const fetchCats = async () => {
      const res = await axios.get("/categories");
      setCategories(res.data);
    };
    fetchCats();
  }, []);
  return (
    <>
      <Topbar />
      <Header/>
      <div className="postCategory">
					<ul className="categoryList">
            {categories.map((cat) =>(
              <Link to ={`/?cat=${cat.name}`}className="link" key={cat._id}>
                <li className="categoryListItem" key={cat._id}>
                  <button className="catListBtn">{cat.name}</button>
                </li>
              </Link>
            ))}
				</ul>
				</div> 
    <div className="home"> 
        <Posts posts ={posts}/>
        <Sidebar/>
     
    </div> 
      
    <Footer/>
      
    </>
  )
}
