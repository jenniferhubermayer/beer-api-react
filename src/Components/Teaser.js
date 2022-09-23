import "./Teaser.css";
import { Link } from "react-router-dom";

const Teaser = (props) => {
  return (
    <section className="home-teaser">
      <Link to={props.route}>
        <img src={props.teaserImage} alt="" />
        <h2>{props.teaserHeader}</h2>
        <p>{props.teaserText}</p>
      </Link>
    </section>
  );
};

export default Teaser;
