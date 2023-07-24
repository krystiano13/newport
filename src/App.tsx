import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Gallery } from "./views/Gallery";
import { Blog } from "./views/Blog";
import { About } from "./views/About";
import { BlogPage } from "./views/BlogPage";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

const App = () => {
  const [title, setTitle] = React.useState<string>('London');

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog/page" element={<BlogPage title={title} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export { App };
