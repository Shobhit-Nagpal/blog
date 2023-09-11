import Footer from "../components/Footer";
import RegisterForm from "../components/RegisterForm";
import Navbar from "../components/Navbar";
import "../styles/RegisterPage.css"
import "../styles/index.css";

function RegisterPage() {

    return (
        <div className="register">
            <Navbar />
            <RegisterForm />
            <Footer />
        </div>
    )
}

export default RegisterPage;
