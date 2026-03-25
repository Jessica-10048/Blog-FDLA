import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Fdla from "./pages/Fdla";
import About from "./pages/About";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fdla" element={<Fdla/>}/>
        <Route path="/about" element={<About />} />
        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;