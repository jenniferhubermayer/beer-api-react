import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import "./Details.css";
import { Link } from "react-router-dom";

const Details = () => {
  const [beers, setBeers] = useState([]);
  let params = useParams();
  const navigate = useNavigate();
  console.log(window.history.state);
  // let beer = beers[params.id]; // WOZU BRAUCHE ICH DA EIGENTLICH?
  useEffect(() => {
    fetch(`https://ih-beers-api2.herokuapp.com/beers/${params.id}`)
      .then((response) => response.json())
      .then((data) => setBeers(data));
  }, [params.id]);

  return (
    <>
      <main>
        <section className="beer-details-page">
          <img src={beers.image_url} alt=""></img>
          <h2>{beers.name}</h2>
          <h3>{beers.tagline}</h3>
          <div className="beer-details">
            <p>First brewed:</p>
            <p>{beers.first_brewed}</p>
          </div>
          <div className="beer-details">
            <p>Attenuation level:</p>
            <p>{beers.attenuation_level}</p>
          </div>
          <p className="beer-description">{beers.description}</p>
          {/* BUG FIXING FOR window.history.state === 0 */}
          <div className="back-link" onClick={() => navigate(-1)}></div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Details;

// let navigateBack = () => {
//   if (window.history.state === 0) {
//     let navigateLink = "./";
//   } else {
//     let navigateLink = -1;
//   }
// };
