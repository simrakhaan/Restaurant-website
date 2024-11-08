import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import TopList from './components/TopList/TopList';
import Banner from './components/Banner/Banner';
import OurServices from './components/OurServices/OurServices';
import { BrowserRouter as Router } from 'react-router-dom';

const bgStyle = {
  backgroundImage: 'url("/images/2.png")',
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const App = () => {
  return (
    <Router>
      <div style={bgStyle} className="overflow-x-hidden">
        <div className="min-h-screen bg-white/50 backdrop-blur-3xl">
          {/* Navbar */}
          <Navbar />

          {/* Sections with IDs for smooth scrolling */}
          <section id="hero" className="min-h-screen">
            <Hero />
          </section>
          <section id="toplist" className="min-h-screen">
            <TopList />
          </section>
          <section id="banner" className="min-h-screen">
            <Banner />
          </section>
          <section id="services" className="min-h-screen">
            <OurServices />
          </section>
        </div>
      </div>
    </Router>
  );
};

export default App;
