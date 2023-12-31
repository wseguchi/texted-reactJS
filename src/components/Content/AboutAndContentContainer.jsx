import React from 'react';
import About from './About';
import Contact from './Contact';
import styles from './Content.module.css';

const AboutAndContentContainer = () => {
  return (
    <>
      <div id="about-and-content-container-bg">
        <div id="about-and-content-container" className="width-restrainer">
          <About />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default AboutAndContentContainer;
