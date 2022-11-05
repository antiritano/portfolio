import './App.css';
import Hero from './components/Hero/Hero';
import Layout from './components/Layout/Layout';
import useScrollSnap from 'react-use-scroll-snap';
import React, { useRef } from 'react';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './Contact/Contact';

function App() {
  const scrollRef = useRef(null);
  const activeScroll = useScrollSnap({
    ref: scrollRef,
    duration: 20,
    delay: 0,
  });
  return (
    <div className="App">
      <Layout activeScroll={activeScroll}>
        <section ref={scrollRef}>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </section>
      </Layout>
    </div>
  );
}

export default App;
