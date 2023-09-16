import Post from "./Post";
import "../styles/Posts.css";
import "../styles/index.css";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Posts({ fromDashboard }) {

    const { userInfo, setUserInfo } = useContext(UserContext);

    return (
        <div className="posts">
            <Post fromDashboard={fromDashboard} />

            {fromDashboard && (
            <>
            <Post fromDashboard={fromDashboard} />
            <Post fromDashboard={fromDashboard} />
            </>
            )}
        </div>
    )
}

export default Posts;
