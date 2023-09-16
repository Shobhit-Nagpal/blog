import EditPostForm from "../components/EditPostForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/EditPostPage.css";
import "../styles/index.css";

function EditPostPage() {
    return (
        <div className="create_post_page">
            <Navbar />
            <EditPostForm />
            <Footer />
        </div>
    )
}

export default EditPostPage;
