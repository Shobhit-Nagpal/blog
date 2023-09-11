import "../styles/PostDetail.css";
import "../styles/index.css";

function PostDetail({ title, content, coverImg, createdAt }) {
    return (
        <div className="post_detail">
            <div className="post_detail_img">
                <img src="" alt="" />
            </div>

            <div className="post_detail_contents">
                <h1 className="post_detail_contents_title">
                    WHAT IS UP, THIS IS THE TITLE
                </h1>
                <date className="post_detail_contents_date" >25-09-2002</date>
                <div className="post_detail_contents_content" />
            </div>
        </div>
    )
}

export default PostDetail;
