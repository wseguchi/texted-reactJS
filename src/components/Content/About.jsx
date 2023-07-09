import React from 'react';

const About = () => {
  return (
    <div>
      <div id="about" className="width-restrainer">
        <div id="about-title">About</div>
        <div id="about-text">
          <h2>
            Text(ed) is a web-based application that evaluates the readability
            and similarity of a text.
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
          <div id="about-tech-icons">
            <div className="about-tech-icons-text">
              <i className="fa-brands fa-python"></i>
              <div>Python and Flask</div>
            </div>
            <div className="about-tech-icons-text">
              <i className="fa-brands fa-js-square"></i>
              <div>JavaScript and JQuery</div>
            </div>
            <div className="about-tech-icons-text">
              <i className="fa-brands fa-html5"></i>
              <div>HTML 5</div>
            </div>
            <div className="about-tech-icons-text">
              <i className="fa-brands fa-css3-alt"></i>
              <div>CSS 3</div>
            </div>
            <div className="about-tech-icons-text">
              <i className="fa-brands fa-square-font-awesome"></i>
              <div>Font Awesome</div>
            </div>
            <div
              id="about-tech-icons-github"
              className="about-tech-icons-text"
              onclick="window.open('https://github.com/wseguchi/texted')"
            >
              <i className="fa-brands fa-github-square"></i>
              <div>View Github Repository</div>
            </div>
          </div>
          <div id="license">
            <p className="text-align-center">
              MIT License{' '}
              <a
                href="https://opensource.org/licenses/MIT"
                target="_blank"
                title="Learn More"
              >
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
