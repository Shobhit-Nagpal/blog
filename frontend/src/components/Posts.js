import Post from "./Post";
import "../styles/Posts.css";
import "../styles/index.css";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";

function Posts({ fromDashboard }) {


    const [posts, setPosts] = useState([]);

    const filteredPosts = fromDashboard ? posts : posts.filter(post => post.published);

    useEffect(() => {
        const response = fetch("http://localhost:4000/")
                        .then(res => res.json())
                        .then(posts => setPosts(posts))
                        .catch((err) => console.log(err));
    }, []);


    return (
        <div className="posts">
            { filteredPosts.map( (post) => (<Post key={post._id} title={post.title} content={post.content} id={post._id} author={post.author.username} coverImg={post.coverImg} createdAt={post.createdAt} published={post.published} fromDashboard={fromDashboard} /> ))}
        </div>
    )
}

export default Posts;
