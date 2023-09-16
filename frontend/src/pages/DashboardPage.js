import { useContext } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Posts from "../components/Posts";
import { UserContext } from "../context/UserContext";

function DashboardPage() {
    
    const { userInfo } = useContext(UserContext);

    return (
        <div className="dashboard">
            <Navbar />
            {userInfo ? <Posts fromDashboard={true}/> : <p>Please log in as adming to access dashboard</p>}
            <Footer />
        </div>
    )
}

export default DashboardPage;
