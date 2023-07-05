import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Cards from './components/Cards';
import TextInput from './components/TextInput';
import Method from './components/Method';
import About from './components/About';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <h1>Texted</h1>
      <Header />
      <Hero />
      <Cards />
      <TextInput />
      <Method />
      <About />
      <Footer />
    </div>
  );
};

export default App;
