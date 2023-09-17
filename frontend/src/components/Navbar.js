import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import "../styles/index.css";
import "../styles/Navbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";

function Navbar() {

    const { userInfo, setUserInfo } = useContext(UserContext);
    const [toggleMenu, setToggleMenu] = useState(false);

    async function logout() {
        await fetch("http://localhost:4000/logout", {
            method: "POST",
            credentials: "include"
        });

        setUserInfo(null);
    }

    useEffect(() => {
       fetch("http://localhost:4000/profile", {
            credentials: "include"
       })
        .then(res => res.json())
        .then(info => setUserInfo(info))
        .catch((err) => console.log(err));
    }, []);

    return (
        <div className="navbar">
            <div className="navbar_logo">
                <Link to={ "/" }>[s]</Link>
            </div>

            {userInfo && userInfo.isAdmin === true && (

                <>
                <div className="navbar_items">
                    <Link to={ "/dashboard" }>Dashboard</Link>
                    <Link to={ "/create" }>Create post</Link>
                    <a onClick={() => { logout() }}>Logout</a>
                </div>

                <div className="navbar_menu">
                    {toggleMenu ? <CloseIcon style={{fill: "white"}} fontSize="large" onClick={() => setToggleMenu(false)} /> : <MenuIcon style={{fill: "white"}} fontSize="large" onClick={() => setToggleMenu(true)}/>}

                    {toggleMenu && (
                        <div className="navbar_menu_container">
                            <Link to={ "/dashboard" }>Dashboard</Link>
                            <Link to={ "/create" }>Create post</Link>
                            <a onClick={() => { logout() }}>Logout</a>
                        </div>
                    )}
                </div>
                </>
            )}
        </div>
    )
}

export default Navbar;
