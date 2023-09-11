import Post from "./Post";
import "../styles/Posts.css";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Posts({ fromDashboard }) {

    const { userInfo, setUserInfo } = useContext(UserContext);

    return (
        <div className="posts">
            <Post />
            <Post />
            <Post />
            {fromDashboard && (
            <Post />
            )}
        </div>
    )
}

export default Posts;
