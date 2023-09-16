import Footer from "../components/Footer";
import AdminForm from "../components/AdminForm";
import Navbar from "../components/Navbar";
import "../styles/AdminPage.css"
import "../styles/index.css";

function AdminPage() {

    return (
        <div className="login">
            <Navbar />
            <AdminForm />
            <Footer />
        </div>
    )
}

export default AdminPage;
