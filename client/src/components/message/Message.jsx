import "./message.css";
import { format } from "timeago.js";
import { useState,useEffect,useContext} from "react";
import axios from "axios";
import { Context } from "../../context/Context";


export default function Message({ message, own,  currentUser}) {
  const [user, setUser] = useState(null);

  const PF = "http://localhost:5000/images/";

useEffect(() => {
    const friendId = message.sender.toString((m) => m !== currentUser._id);

    const getUser = async () => {
      try {
        const res = await axios("/users?userId=" + friendId);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser,message]);


  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src={
            user?.profilePic
              ? PF + user.profilePic
              : PF + "noAvatar.png"
          }
          alt=""
        />
        
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  );
}
