import React from 'react';
import styles from './Header.module.css';
import Nav from './Nav';
import Hero from './Hero';

const Header = () => {
  return (
    <section id="header" className={styles.header}>
      <div className="width-restrainer">
        <Nav />
        <Hero />
      </div>
    </section>
  );
};

export default Header;
