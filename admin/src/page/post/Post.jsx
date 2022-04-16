import { Link } from "react-router-dom";
import "./post.css";
import Chart from "../../components/chart/Chart"
import {postData} from "../../dummyData"
import { Publish } from "@mui/icons-material";

export default function Post() {
  return (
    <div className="post">
      <div className="postTitleContainer">
        <h1 className="postTitle">Blog</h1>
       
      </div>
     
      <div className="postBottom">
          <form className="postForm">
              <div className="postFormLeft">
                  <label>post Name</label>
                  <input type="text" placeholder="Apple AirPod" />
                  <label>In Stock</label>
                  <select name="inStock" id="idStock">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
                  <label>Active</label>
                  <select name="active" id="active">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
              </div>
              <div className="postFormRight">
                  <div className="postUpload">
                      <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="postUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="postButton">Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}
