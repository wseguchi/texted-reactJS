import React from 'react';
import styles from './Content.module.css';
import Cards from './Cards';
import TextInput from './TextInput';

const Content = () => {
  return (
    <section id="content" className={styles.content}>
      <Cards />
      <TextInput />
    </section>
  );
};

export default Content;
