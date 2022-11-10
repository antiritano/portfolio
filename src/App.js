import './App.css';
import Hero from './components/Hero/Hero';
import Layout from './components/Layout/Layout';
import React, { useRef } from 'react';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './Contact/Contact';

function App() {
  return (
    <div className="App">
      <Layout>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Layout>
    </div>
  );
}

export default App;
