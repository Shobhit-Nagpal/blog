import { useContext } from "react";
import EditPostForm from "../components/EditPostForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { UserContext } from "../context/UserContext";
import "../styles/EditPostPage.css";
import "../styles/index.css";

function EditPostPage() {

    const { userInfo } = useContext(UserContext);

    return (
        <div className="edit_post_page">
            <Navbar />
        {userInfo && typeof userInfo.username !== "undefined" ? (<EditPostForm />) 
            : 
            (<div className="edit_page_auth_container">
                <p>Please log in to edit post</p>
            </div>) }
            <Footer />
        </div>
    )
}

export default EditPostPage;
