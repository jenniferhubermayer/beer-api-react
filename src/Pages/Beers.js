import BeerTeaser from "../Components/BeerTeaser";
import { useEffect, useState } from "react";
import Footer from "../Components/Footer";

const Beers = () => {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => response.json())
      .then((data) => setBeers(data));
  }, []);
  return (
    <>
      <main>
        {beers.map((beer, index) => (
          <BeerTeaser
            key={"BeerDetails" + index}
            beerImage={beer.image_url}
            beerName={beer.name}
            beerTagline={beer.tagline}
            beerRoute={beer._id}
          />
        ))}
      </main>
      <Footer />
    </>
  );
};

export default Beers;
