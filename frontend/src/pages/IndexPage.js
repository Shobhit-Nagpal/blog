import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Posts from "../components/Posts";

function IndexPage() {
    return (
        <div className="index">
            <Navbar />
            <Posts />
            <Footer />
        </div>
    )
}

export default IndexPage;
