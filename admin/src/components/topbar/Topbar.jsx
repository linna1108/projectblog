import React from "react";
import "./topbar.css";
import { Logout} from "@mui/icons-material";
import { Context } from "../../context/authContext/Context";
import { useContext } from "react";
import {Link} from "react-router-dom"

export default function Topbar() {
  const {dispatch} = useContext(Context);

  const handleLogout = () =>{
    dispatch({type:"LOGOUT"})
  }

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin Blog</span>
        </div>
        <div className="topRight">
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="topAvatar"
          />
          <div className="topbarIconContainer">
          <Link className="link" to="/login">
            <button className="btnLogout" onClick={handleLogout}>
              <Logout/>
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
