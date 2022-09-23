import "./App.css";
// import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Beers from "./Pages/Beers";
import Details from "./Pages/Details";

function App() {
  // const [beers, setBeers] = useState([]);
  // useEffect(() => {
  //   fetch("https://ih-beers-api2.herokuapp.com/beers")
  //     .then((response) => response.json())
  //     .then((data) => setBeers(data));
  // }, []);
  // console.log(beers);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beers" element={<Beers />} />
          <Route path="/beers/:id" element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
