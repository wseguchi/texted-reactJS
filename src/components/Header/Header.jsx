import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <section id="header" className={styles.header}>
      <nav>
        <div className={styles.navLogo}>
          text(<span className={styles.ed}>ed</span>)
        </div>
        <div className={styles.navLinks}>
          <ul>
            <li>Home</li>
            <li>Method</li>
            <li>About</li>
          </ul>
        </div>
        <div className={styles.navButton}>
          <button>Contact</button>
        </div>
      </nav>
    </section>
  );
};

export default Header;
