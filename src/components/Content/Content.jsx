import React from 'react';
import styles from './Content.module.css';
import Cards from './Cards';
import TextInput from './TextInput';
import Method from './Method';
import About from './About';
import Contact from './Contact';

const Content = () => {
  return (
    <section id="content" className={styles.content}>
      <Cards />
      <TextInput />
      <Method />
      <About />
      <Contact />
    </section>
  );
};

export default Content;
