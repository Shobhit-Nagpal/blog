import "../styles/Post.css";
import "../styles/index.css";
import { UserContext } from "../context/UserContext";
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";

function Post({ id, title, author, formatted_createdAt, createdAt, content, coverImg, fromDashboard, published }) {

    const { userInfo, setUserInfo } = useContext(UserContext);
    const [redirect, setRedirect] = useState(false);
    
    async function publishPost() {
        const response = await fetch(`http://localhost:4000/post/${id}`, {
            method: "PUT",
            body: JSON.stringify({ title: title, content: content, author, coverImg: coverImg, createdAt: createdAt, published: true }),
            headers: {"Content-Type": "application/json"}, 
            credentials: "include"
        });

        if (response.ok) {
            setRedirect(true);
        }
    }

    async function archivePost() {
            
        const response = await fetch(`http://localhost:4000/post/${id}`, {
            method: "PUT",
            body: JSON.stringify({ title: title, content: content, author, coverImg: coverImg, createdAt: createdAt, published: false }),
            headers: {"Content-Type": "application/json"}, 
            credentials: "include"
        });
        
        if (response.ok) {
            window.location.reload();
        }

    }

    async function deletePost() {

        const response = await fetch(`http://localhost:4000/post/${id}`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"}, 
            credentials: "include"
        });
        
        if (response.ok) {
            window.location.reload();
        }

    }

    if (redirect) {
        return <Navigate to={ "/" } />
    }


    return (
        <div className="post">
            <div className="post_img">
                <Link to={ `/post/${id}` }><img src={ "http://localhost:4000/" + coverImg } alt="" /></Link>
            </div>

            <div className="post_details">
                <div className="post_details_info">
                    <Link to={ `/post/${id}` }><h2 className="post_details_title">{ title }</h2></Link>
                    <p className="post_details_author">{ author }</p>
                    <time className="post_details_date">{ formatted_createdAt }</time>
                </div>

                {userInfo && userInfo.isAdmin === true && fromDashboard && (
                <div className="post_details_btns">
                    { !published ? (<button onClick={ () => publishPost() } className="post_details_btns_publish">Publish</button>) : (<button onClick={ () => archivePost() } className="post_details_btns_archive">Archive</button>)}
                    <Link to={ `/edit/${id}` }><button className="post_details_btns_edit">Edit</button></Link>
                    <button onClick={ () => deletePost() } className="post_details_btns_delete">Delete</button>
                </div>
                )}
            </div>

        </div>
    )
}

export default Post;
