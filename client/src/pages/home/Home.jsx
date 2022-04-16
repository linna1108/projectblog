import "./home.css";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Panigation from "../../components/panigation/Panigation";
import Sidebar from "../../components/sidebar/Sidebar";
import { React, useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Topbar from "../../components/topbar/Topbar";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import {useContext} from "react";


export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const { user } = useContext(Context);
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("/posts" + search);
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
      setLoading(false);
    };
    fetchPosts();
  }, [search]);

  //get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
      <Header />
      {user && (
        <div class="up-arrow">
          <a href={`/messager`}>
            <img
              src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.15752-9/277043063_999376857348538_4350643003617398512_n.png?stp=cp0_dst-png&_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=duMpxpw-NuoAX-wjaJS&_nc_ht=scontent.fdad3-4.fna&oh=03_AVI9lBi5KpQ0gV288faqIoxfVhBIzoBObknLHHBRw71fUg&oe=626D052D"
              className="icon-arrow"
            />
          </a>
        </div>
      )}

      <div className="postCategory">
        <ul className="categoryList">
          {categories.map((cat) => (
            <Link to={`/?cat=${cat.name}`} className="link" key={cat._id}>
              <li className="categoryListItem" key={cat._id}>
                <button className="catListBtn">{cat.name}</button>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="home">
        <Posts posts={currentPosts} loading={loading} />
        <Sidebar />
      </div>
      <Panigation
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
      <Footer /> 
    </>
  );
}
