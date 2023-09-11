import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
import Navbar from "../components/Navbar";
import "../styles/LoginPage.css"
import "../styles/index.css";

function LoginPage() {

    return (
        <div className="login">
            <Navbar />
            <LoginForm />
            <Footer />
        </div>
    )
}

export default LoginPage;
