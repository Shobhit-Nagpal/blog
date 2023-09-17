import { useContext } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Posts from "../components/Posts";
import { UserContext } from "../context/UserContext";
import "../styles/DashboardPage.css";
import "../styles/index.css";

function DashboardPage() {
    
    const { userInfo } = useContext(UserContext);

    return (
        <div className="dashboard">
            <Navbar />
            {userInfo ? (<>
                <h1 className="dashboard_header">Dashboard</h1> 
                <Posts fromDashboard={true}/>
                </>)
                : 
                (<div className="dashboard_auth_container">
                    <p>Please log in as adming to access dashboard</p>
                </div>)}
            <Footer />
        </div>
    )
}

export default DashboardPage;
