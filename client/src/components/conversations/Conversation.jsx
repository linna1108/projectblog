import "./conversation.css";
import { useEffect, useState } from "react";
import axios from "axios";


export default function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState(null);
  const PF = "http://localhost:5000/images/";

    useEffect(() => {
      const friendId = conversation.members.find((m) => m !== currentUser._id);

      const getUser = async () => { 
        try {
          const res = await axios("/users?userId=" + friendId);
          setUser(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      getUser();
    }, [currentUser, conversation]);
  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src={
          user?.profilePic
            ? PF + user.profilePic
            : PF + "noAvatar.png"
        }
        alt=""
      />
      <p className="conversationName">{user?.username}</p>
    </div>
  );
}
