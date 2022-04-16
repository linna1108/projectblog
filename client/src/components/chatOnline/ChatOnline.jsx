import axios from "axios";
import "./chatOnline.css";

export default function ChatOnline({onlineUsers, currentId, setCurrentChat}) {

  // const[friends, setFriends] =useState([]);
  // const[onlineFriends, setOnlineFriends] =useState([]);

  // useEffect(() => {
  //   const getFriends = async() =>{
  //     const res = await axios.get("/users/friends/" + currentId);
  //     setFriends(res.data);
  //   };
  //   getFriends();
  // }, [currentId]);
  // console.log(friends);
  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img className="chatOnlineImg"
            src="https://images.pexels.com/photos/10885387/pexels-photo-10885387.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
          ></img>
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">Tri</span>
      </div>
    </div>
  );
}
