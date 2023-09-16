import CreatePostForm from "../components/CreatePostForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/CreatePostPage.css";
import "../styles/index.css";

function CreatePostPage() {
    return (
        <div className="create_post_page">
            <Navbar />
            <CreatePostForm />
            <Footer />
        </div>
    )
}

export default CreatePostPage;
