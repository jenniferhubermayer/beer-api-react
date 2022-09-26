import "./Footer.css";

// PACKAGES
import { Link } from "react-router-dom";

// IMAGES
import logo from "../Images/Logo.png";

// ----------> FUNCTION FOR FOOTER COMPONENT

const Footer = () => {
  return (
    <footer>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
    </footer>
  );
};

export default Footer;
