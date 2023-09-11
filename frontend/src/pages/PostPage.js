import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/PostPage.css";
import "../styles/index.css";
import PostDetail from "../components/PostDetail";

function PostPage() {

    const { id } = useParams();

    return (
        <div className="post_page">
            <Navbar />
            <PostDetail />
            <Footer />
        </div>
    )
}

export default PostPage;
