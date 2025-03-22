
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery.jsx';
import {ThemeProvider} from './components/theme-provider';

const App = () => {
  return (
    <div className=" w-full mx-auto ">
       <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
      </ThemeProvider>
    </div>
  );
};

export default App; 