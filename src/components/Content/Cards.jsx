import React from 'react';
import styles from './Content.module.css';
import { FaBookOpenReader, FaCopy } from 'react-icons/fa6';

const Cards = () => {
  return (
    <div className={`${styles.cardsMain} width-restrainer`}>
      <div>
        <FaBookOpenReader className={styles.cardsIcon} />
        <h1>
          (<span className="strong-purple">read</span>)ability
        </h1>
        <h3 className={styles.cardsText}>
          Check <strong>readability</strong> to keep your content accessible and
          maximize your audience readership.
        </h3>
      </div>
      <div>
        <FaCopy className={styles.cardsIcon} />
        <h1>
          (<span className="strong-purple">similar</span>)ity
        </h1>
        <h3 className={styles.cardsText}>
          Check <strong>similarity</strong> to avoid redundancies and
          plagiarism.
        </h3>
      </div>
    </div>
  );
};

export default Cards;
