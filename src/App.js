import "./App.css";
import Footer from "./common/Footer";
import Header from "./common/header";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Game from "./pages/Game";
import Home from "./pages/Home";
import GameDetails from "./pages/GameDetails";
import Search from "./pages/Search";
import GameSection from "./pages/Gamesection";


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<GameSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/game" element={<Game/>} />
          <Route path="/game/:id" element={<GameDetails />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/:query" element={<Search />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
