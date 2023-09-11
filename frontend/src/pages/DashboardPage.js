import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Posts from "../components/Posts";

function DashboardPage() {
    return (
        <div className="dashboard">
            <Navbar />
            <Posts fromDashboard={true}/>
            <Footer />
        </div>
    )
}

export default DashboardPage;
