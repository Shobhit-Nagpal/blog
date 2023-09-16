import "../styles/Post.css";
import "../styles/index.css";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

function Post({ fromDashboard }) {

    const { userInfo, setUserInfo } = useContext(UserContext);

    return (
        <div className="post">
            <div className="post_img">
                <img src="https://variety.com/wp-content/uploads/2023/05/spider-2.jpg?w=1000&h=563&crop=1" alt="" />
            </div>

            <div className="post_details">
                <div className="post_details_info">
                    <h2 className="post_details_title">Title</h2>
                    <p className="post_details_author">Shobhit Nagpal</p>
                    <time className="post_details_date">25-09-2002</time>
                </div>

                {userInfo && userInfo.isAdmin === true && fromDashboard && (
                <div className="post_details_btns">
                    <button>Publish</button>
                    <button>Delete</button>
                </div>
                )}
            </div>

        </div>
    )
}

export default Post;
