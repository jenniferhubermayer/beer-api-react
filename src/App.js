import "./App.css";

// PACKAGES
import { BrowserRouter, Routes, Route } from "react-router-dom";

// PAGES
import Home from "./Pages/Home";
import Beers from "./Pages/Beers";
import Details from "./Pages/Details";

// ----------> FUNCTION FOR APP

function App() {
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
