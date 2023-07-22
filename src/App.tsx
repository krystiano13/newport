import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Gallery } from "./views/Gallery";
import { Blog } from "./views/Blog";
import { About } from "./views/About";

import { Navbar } from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export { App };
