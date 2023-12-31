import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Posts from "../components/Posts";
import "../styles/IndexPage.css";
import { useState } from "react";

function IndexPage() {
    return (
        <div className="index">
            <Navbar />
            <h1 className="index_heading">Posts</h1>
            <Posts fromDashboard={false}/>
            <Footer />
        </div>
    )
}

export default IndexPage;
