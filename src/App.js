import './App.css';
import Hero from './components/Hero/Hero';
import Layout from './components/Layout/Layout';
import useScrollSnap from 'react-use-scroll-snap';
import React, { useEffect, useRef } from 'react';
import About from './components/About/About';

function App() {
  const scrollRef = useRef(null);
  const activeScroll = useScrollSnap({
    ref: scrollRef,
    duration: 10,
    delay: 50,
  });
  return (
    <div className="App">
      <Layout activeScroll={activeScroll}>
        <section ref={scrollRef}>
          <Hero />
          <About />
        </section>
      </Layout>
    </div>
  );
}

export default App;
