import Post from "../post/Post";
import "./posts.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../../context/Context";
export default function Posts({posts}) {

  return (	
    <div className="posts">
		
			{
				posts.map((post) => 

					<Post key={post._id} post={post} />)
			}
		</div>
  );
}
