import React from 'react';
import About from './About';
import Contact from './Contact';

const AboutAndContentContainer = () => {
  return (
    <>
      <div id="about-and-content-container" className="width-restrainer">
        <About />
        <Contact />
      </div>
    </>
  );
};

export default AboutAndContentContainer;
