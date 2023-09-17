import "../styles/PostDetail.css";
import "../styles/index.css";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

function PostDetail() {
    
    const { id } = useParams();

    const [postInfo, setPostInfo] = useState(null);
    const { userInfo } = useContext(UserContext);

    useEffect(() => {
        fetch(`http://localhost:4000/post/${id}`)
        .then(res => res.json())
        .then(data => {
            setPostInfo(data);
        });
    }, []);

    if (!postInfo) {
        return "";
    }

    return (
        <div className="post_detail">
            <h1 className="post_detail_title">{ postInfo.title }</h1>
            <div className="post_detail_img">
                <img src={"http://localhost:4000/" + postInfo.coverImg} alt="" />
            </div>

            {userInfo && typeof userInfo.username !== "undefined" && (
                <div className="post_detail_btns">
                    <Link to={ `/edit/${id}` }><button>Edit</button></Link>
                </div>
            )}

            <div className="post_detail_contents">
                <date className="post_detail_contents_date">{ postInfo.createdAt }</date>
                <div className="post_detail_contents_content" dangerouslySetInnerHTML={{ __html: postInfo.content }}/>
            </div>
        </div>
    )
}

export default PostDetail;
