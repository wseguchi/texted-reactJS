import React from 'react';
import styles from './Content.module.css';
import imgBgRightYellowCircle from '../../assets/img-bg-right-yellow-circle.svg';
import { FiExternalLink } from 'react-icons/fi';

const Method = () => {
  return (
    <>
      <div className={styles.methodBgCircle}>
        <img src={imgBgRightYellowCircle} />
      </div>
      <div className={styles.method}>
        <div className="width-restrainer">
          <div className={styles.methodTitle}>
            <div
              id="method-title-readability"
              className="mt mt-active"
              // onClick="changeMethodVisibility('readability')"
            >
              <h1>
                (
                <span id="method-title-span-readability" className="ed">
                  read
                </span>
                )ability
              </h1>
            </div>
            <div
              id="method-title-similarity"
              className="mt mt-inactive"
              // onClick="changeMethodVisibility('similarity')"
            >
              <h1>
                (
                <span id="method-title-span-similarity" className="">
                  similar
                </span>
                )ity
              </h1>
            </div>
          </div>
          <div className={styles.methodContent}>
            <div id="method-text-readability" className={styles.methodText}>
              <div className={styles.methodTextSubtitle}>
                <span className="ed">Readability</span> refers to the ease with
                which text can be read and understood.
              </div>
              <p>
                The average American is considered to have a readability level
                equivalent to a <strong>7th/8th grader</strong> (12 to 14 years
                old).
                <a
                  href="https://centerforplainlanguage.org/what-is-readability/#:~:text=U.S.%20illiteracy%20statistics%20from%20the,guidelines%20in%20the%20medical%20industry"
                  target="_blank"
                >
                  <FiExternalLink className={styles.methodIcon} />
                </a>
              </p>
              <p>
                Readability formulas are often used to assess the{' '}
                <strong>difficulty</strong> of text.
              </p>
              <p>
                These formulas use mathematical calculations to produce a score.
                The score shows the relative difficulty on a continuum from easy
                (grade five or lower) to very hard (college level and above).{' '}
                <strong>
                  Higher scores mean lower reading ease or lower readability.
                </strong>
                <a
                  href="http://www.clearlanguagegroup.com/readability/"
                  target="_blank"
                  title="Learn More"
                >
                  <FiExternalLink className={styles.methodIcon} />
                </a>
              </p>
              <p>
                This app calculates the score according to the{' '}
                <a
                  href="https://en.wikipedia.org/wiki/Coleman%E2%80%93Liau_index"
                  target="_blank"
                  title="Learn More"
                >
                  Coleman–Liau Index
                </a>
                :
              </p>
              <p>
                The Coleman–Liau index is a readability test designed by Meri
                Coleman and T. L. Liau to gauge the understandability of a text.
                Like the Flesch–Kincaid Grade Level, Gunning fog index, SMOG
                index, and Automated Readability Index,{' '}
                <strong>
                  its output approximates the U.S. grade level thought necessary
                  to comprehend the text.
                </strong>
                <a
                  href="https://en.wikipedia.org/wiki/Coleman%E2%80%93Liau_index"
                  target="_blank"
                  title="Learn More"
                >
                  <FiExternalLink className={styles.methodIcon} />
                </a>
              </p>
            </div>
            <div
              id="method-text-similarity"
              className={`${styles.methodText} mt-hide`}
            >
              <div className={styles.methodTextSubtitle}>
                <span className="ed">Similarity</span> refers to how "close" two
                pieces of text are.
              </div>
              <p>
                Measuring the similarity is of key importance in several natural
                processing applications including information retrieval, book
                recommendation, news categorization and essay scoring.
                <a
                  href="https://www.aclweb.org/anthology/P18-1218.pdf"
                  target="_blank"
                  title="Learn More"
                >
                  <FiExternalLink className={styles.methodIcon} />
                </a>
              </p>
              <p>
                The texts can be similar in a) meaning or b) surface closeness.
                The first is referred to as <strong>semantic similarity</strong>{' '}
                and the latter is referred to as{' '}
                <strong>lexical similarity</strong>.
              </p>
              <p>
                This app evaluates the{' '}
                <a
                  href="https://kavita-ganesan.com/what-is-text-similarity/#.Xx88PBNKh0w"
                  target="_blank"
                  title="Learn More"
                >
                  Lexical Similarity
                </a>
                :
              </p>
              <p>
                It means how similar two pieces of text are at the surface
                level. For example, how similar are the phrases{' '}
                <strong>“the cat ate the mouse”</strong> with{' '}
                <strong>“the mouse ate the cat food”</strong> by just looking at
                the words? On the surface, if you consider only word level
                similarity, these two phrases appear very similar as 3 of the 4
                unique words are an exact overlap.{' '}
                <strong>
                  {' '}
                  This notion of similarity does not take into account the
                  actual meaning behind words or the entire phrase in context.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Method;
