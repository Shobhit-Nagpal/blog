import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import "../styles/index.css";
import "../styles/Navbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Menu() {

  return (  
        <>
            <p>Dashboard</p>
            <p>Logout</p>
        </>
  )
}

function Navbar() {

    const { userInfo, setUserInfo } = useContext(UserContext);
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="navbar">
            <div className="navbar_logo">
                <p>[s]</p>
            </div>

            {userInfo && userInfo.isAdmin === true && (

                <>
                <div className="navbar_items">
                    <Menu />
                </div>

                <div className="navbar_menu">
                    {toggleMenu ? <CloseIcon style={{fill: "white"}} fontSize="large" onClick={() => setToggleMenu(false)} /> : <MenuIcon style={{fill: "white"}} fontSize="large" onClick={() => setToggleMenu(true)}/>}

                    {toggleMenu && (
                        <div className="navbar_menu_container">
                            <Menu />
                        </div>
                    )}
                </div>
                </>
            )}
        </div>
    )
}

export default Navbar;
