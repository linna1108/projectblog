import axios from "axios";
import "./chatOnline.css";
import { useState,useEffect } from "react";

export default function ChatOnline({onlineUsers, currentId, setCurrentChat}) {

  const[friends, setFriends] =useState([]);
  const[onlineFriends, setOnlineFriends] =useState([]);
  const PF = "http://localhost:5000/images/";

  useEffect(() => {
    const getFriends = async() =>{
      const res = await axios.get("/users/friends/" + currentId);
      setFriends(res.data);
    };
    getFriends();
  }, [currentId]);

  useEffect(() =>{
    setOnlineFriends(friends.filter(f => onlineUsers.includes(f._id)));

  },[friends,onlineUsers])


  const handleClick = async (user) => {
    try {
      const res = await axios.get(
        `/conversations/find/${currentId}/${user._id}`
      );
      setCurrentChat(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return ( 
    <div className="chatOnline">
      {onlineFriends.map((o) =>(
      <div className="chatOnlineFriend" onClick={() => handleClick(o)}>
        <div className="chatOnlineImgContainer" >
          <img className="chatOnlineImg"
            src={
              o?.profilePic
                ? PF + o.profilePic
                : PF + "images/noAvatar.png"
            }
            alt=""
          ></img>
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">{o.username}</span>
      </div>
      ))}
    </div>
  );
}
