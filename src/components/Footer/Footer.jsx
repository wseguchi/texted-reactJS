import React from 'react';
import styles from './Footer.module.css';
import { BsLinkedin, BsGithub, BsDiscord } from 'react-icons/bs';

const Footer = () => {
  return (
    <section id="footer" className={styles.footer}>
      <div className={`${styles.footerContent} width-restrainer`}>
        <div className={styles.footerLogo}>
          text(<span className={styles.ed}>ed</span>)
        </div>
        <div className={styles.footerCopyright}>
          Copyright &copy; 2023 Wildson Seguchi. All rights reserved.
        </div>
        <div className={styles.footerSocialmedia}>
          <BsLinkedin
            className={styles.icon}
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/wildson-seguchi',
                '_blank',
              )
            }
          />
          <BsGithub
            className={styles.icon}
            onClick={() => window.open('https://github.com/wseguchi', '_blank')}
          />
          <BsDiscord
            className={styles.icon}
            onClick={() =>
              window.open(
                'https://discordapp.com/users/733873632593576039',
                '_blank',
              )
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;
