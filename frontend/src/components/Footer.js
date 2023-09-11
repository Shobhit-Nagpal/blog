import {FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";
import '../styles/Footer.css';
import '../styles/index.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footer_info">
                <p>Copyright &#169; 2023</p>
            </div>

            <div className="footer_links">
                <a href="https://github.com/Shobhit-Nagpal" target="_blank" rel="noreferrer"><FaGithub className="footer_links_icon" /></a>
                <a href="https://www.linkedin.com/in/shobhitnagpal/" target="_blank" rel="noreferrer"><FaLinkedin className="footer_links_icon" /></a>
                <a href="https://www.twitter.com/shbhtngpl" target="_blank" rel="noreferrer"><FaTwitter className="footer_links_icon" /></a>
            </div>
        </div>
    )
}

export default Footer
