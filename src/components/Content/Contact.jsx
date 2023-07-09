import React from 'react';
import styles from './Content.module.css';

const Contact = () => {
  return (
    <div id="contact">
      <div className={styles.aboutContactTitle}>Contact</div>
      <div className={styles.aboutContactText}>
        <h2>Don't hesitate to contact us for any information.</h2>
        {/* <div className="container">
        <form
          action="https://formsubmit.co/c079bc6b15f2648eb285640c8308be3a"
          method="POST"
        >
          <div className="contact-input-flex">
            <label htmlFor="fname">Full Name</label>
            <input
              type="text"
              id="full-name"
              name="name"
              placeholder="Full Name"
              required
            />
          </div>
          <div className="contact-input-flex">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="contact-input-flex">
            <label htmlFor="subject">Subject</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Message"
              // style="height:200px"
              required
            ></textarea>
          </div>
          <input type="hidden" name="_subject" value="Texted | New Message" />
          <div className="contact-input-submit">
            <button className="btn-yellow" type="submit" value="Submit">
              SUBMIT
            </button>
          </div>
        </form>
      </div> */}
      </div>
    </div>
  );
};

export default Contact;
