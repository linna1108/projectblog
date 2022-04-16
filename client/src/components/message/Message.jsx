import "./message.css"
import { format } from "timeago.js";
export default function Message({message,own}) {
  return (
    <div className={own ? "message own" : "message"}>
        <div className="messageTop">
            <img className="messageImg" src="https://images.pexels.com/photos/10885387/pexels-photo-10885387.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
            <p className="messageText">{message.text}</p>
        </div>
        <div className="messageBottom">{format( message.createdAt)}</div>
    </div>
  )
}
