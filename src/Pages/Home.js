// PACKAGES
import { useEffect, useState } from "react";

// COMPONENTS
import Teaser from "../Components/Teaser";

// ----------> FUNCTION FOR HOME PAGE

const Home = () => {
  const [randomBeer, setRandomBeer] = useState([]);
  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => response.json())
      .then((data) => setRandomBeer(data));
  }, []);
  let imgs = [
    "https://images.unsplash.com/photo-1518542698889-ca82262f08d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1558642891-54be180ea339?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  ];
  return (
    <main>
      <Teaser
        route="./beers"
        teaserImage={imgs[0]}
        teaserHeader="All Beers"
        teaserText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis."
      />
      <Teaser
        route={`./beers/${randomBeer._id}`}
        teaserImage={imgs[1]}
        teaserHeader="Random Beer"
        teaserText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis."
      />
    </main>
  );
};

export default Home;
