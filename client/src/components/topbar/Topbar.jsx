import "./topbar.css";
import {Link} from "react-router-dom";
import { Context } from "../../context/Context";
import {useContext} from "react";
import {ArrowDropDown} from "@mui/icons-material"
import { useState } from "react";

export default function Topbar() {
  const {user, dispatch} = useContext(Context);
  const PF = "http://localhost:5000/images/"
  const [isScrolled, setIsScrolled] = useState(false);


  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const handleLogout = () =>{
    dispatch({type:"LOGOUT"})
  }

  return (
    <div className={isScrolled ? "top scrolled" : "top"}>
      <div className="topContainer">    
       <div className="topLeft">
         <Link className="link" to="/">
          <img className="logo" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjbF-9uC3Nv5u4qyYe69iHT2CoN6A4K9kOpO5CAYhfxBV5M_e7VSkxy-WoIO4xZy-FYBM0AEhM-Un2JrZ6HrnGmHIhZyHtyZsI8SXz3DkuTL2VQQUOJZySZ-ltzTIxXoOUS3Bsu5Zc9jkvTY83NxPYjXf1E8LxEpoGG-N3OW0pnK1e7uzIZ6GH8vFOUcw/s16000/3.png?fbclid=IwAR1wHVqOPU59iQeoSSyyol3004qveeqNaSWsAAsAkD0WLT213Jn0R97JM6g"></img></Link>         
       </div>
       <div className="topCenter">
      
        </div>
       <div className="topRight">
              <ul className="topList">
                  <li className="topListItem" >
                    <Link className="link" to ="/">Homepage</Link>
                  </li>
                  <li className="topListItem" >
                  <Link className="link" to ="/about">About us</Link>
                  </li>
                <li className="topListItem">
                <Link className="link" to ="/write">Post blog</Link>
                  </li>               
                  <li className="topListItem">              
                  </li>               
                {!user &&(
                <ul className="topLogin">
                    <li className="topListLogin">
                      <Link className="link" to ="/login">LOGIN</Link>              
                    </li>
                    <li className="topListLogin">
                      <Link className="link" to ="/register">REGISTER</Link>                 
                    </li>
                </ul>
              )}
                </ul>
                                  
               {user && (             
                  <img className="topImg" 
                    src={PF + user.profilePic}
                    alt=""></img>
                  )}             
               {user && (
               <div className="profile">
               <ArrowDropDown className="icon" />
               <div className="options">
                 <Link className="link" to={`/profile/${user.username}`}>
                 <span>My blog</span></Link>
                 <Link className="link" to ="/settings">
                 <span>Edit account</span></Link>
                 
                 <Link className="link" to="/">
                 <span onClick={handleLogout}>{user && "Logout"}</span></Link>
               </div>
             </div>

              )}
              
             
              
            
        </div> 
      </div>
    
      </div>      
   
    
     
     
    
   
  )
}
