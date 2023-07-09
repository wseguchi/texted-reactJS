import React from 'react';
import styles from './Content.module.css';
import { FaReact, FaHtml5, FaCss3Alt, FaSquareGithub } from 'react-icons/fa6';
import { RiJavascriptFill } from 'react-icons/ri';
import { FiExternalLink } from 'react-icons/fi';

const About = () => {
  return (
    <div id="about">
      <div className={styles.aboutContactTitle}>About</div>
      <div className={styles.aboutContactText}>
        <h2>
          Text(ed) is a web-based application that evaluates the readability and
          similarity of a text.
        </h2>
        <p>
          The project was inspired by a problem set called "Readability"
          presented by the{' '}
          <a
            href="https://cs50.harvard.edu/x/"
            target="_blank"
            title="Learn More"
          >
            CS50's program
          </a>{' '}
          in weeks 2 and 6.
        </p>
        <p>The application was built with the following technologies:</p>
        <div className={styles.aboutIconsDiv}>
          <div className={styles.aboutIconsText}>
            <FaReact className={styles.aboutIcons} />
            <div>React and Redux</div>
          </div>
          <div className={styles.aboutIconsText}>
            <RiJavascriptFill className={styles.aboutIcons} />
            <div>JavaScript</div>
          </div>
          <div className={styles.aboutIconsText}>
            <FaHtml5 className={styles.aboutIcons} />
            <div>HTML 5</div>
          </div>
          <div className={styles.aboutIconsText}>
            <FaCss3Alt className={styles.aboutIcons} />
            <div>CSS 3</div>
          </div>
          <div
            id="about-tech-icons-github"
            className={`${styles.aboutIconsText} ${styles.aboutIconsGithub}`}
            onClick="window.open('https://github.com/wseguchi/texted')"
          >
            <FaSquareGithub className={styles.aboutIcons} />
            <div>View Github Repository</div>
          </div>
        </div>
        <div className={styles.aboutLicense}>
          <p>
            MIT License
            <a
              href="https://opensource.org/licenses/MIT"
              target="_blank"
              title="Learn More"
            >
              <FiExternalLink className={styles.aboutIconsLicense} />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
