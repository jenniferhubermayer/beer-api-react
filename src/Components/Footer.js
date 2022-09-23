import logo from "../Images/Logo.png";
import "./Footer.css";
import { Link } from "react-router-dom";

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
