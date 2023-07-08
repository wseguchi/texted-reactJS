import React from 'react';
import styles from './Content.module.css';
import Cards from './Cards';
import TextInput from './TextInput';
import Method from './Method';

const Content = () => {
  return (
    <section id="content" className={styles.content}>
      <Cards />
      <TextInput />
      <Method />
    </section>
  );
};

export default Content;
