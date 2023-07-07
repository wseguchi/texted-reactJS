import React from 'react';
import styles from './Content.module.css';
import Cards from './Cards';

const Content = () => {
  return (
    <section id="content" className={styles.content}>
      <Cards />
    </section>
  );
};

export default Content;
