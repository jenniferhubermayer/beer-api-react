import "./BeerTeaser.css";

// PACKAGES
import { Link } from "react-router-dom";

// ----------> FUNCTION FOR BEER TEASER COMPONENT ON BEERS PAGE

const BeerTeaser = (props) => {
  return (
    <article className="beer-teaser">
      <img src={props.beerImage} alt=""></img>
      <div className="content-wrapper">
        <h2>{props.beerName}</h2>
        <h3>{props.beerTagline}</h3>
        <p>Created by: {props.beerName}</p>
        <Link to={props.beerRoute}>Details</Link>
      </div>
    </article>
  );
};

export default BeerTeaser;
