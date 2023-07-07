import React from 'react';
import styles from './Header.module.css';
import imgBooks from '../../assets/img-books-main.svg';
import imgBgCircle from '../../assets/img-bg-circle.png';
import { FaLightbulb } from 'react-icons/fa';

const Hero = () => {
  return (
    <div id="hero" className={styles.hero}>
      <div className={styles.heroText}>
        <h1>
          <span className="light-white">Welcome to </span>Text(
          <span className={styles.ed}>ed</span>)
        </h1>
        <div>
          Check the <strong>readability</strong> and <strong>similarity</strong>{' '}
          of your texts
        </div>
        <button className="btn-green">
          Try now <FaLightbulb className={styles.heroIcon} />
        </button>
      </div>
      <div className={styles.heroImage}>
        <img src={imgBooks} alt="An opened book with a lamp" />
      </div>
      <div className={styles.heroBgCircle}>
        <img src={imgBgCircle} />
      </div>
    </div>
  );
};

export default Hero;
