import React from 'react';
import styles from './Content.module.css';
import imgBgRightYellowCircle from '../../assets/img-bg-right-yellow-circle.svg';

const TextInput = () => {
  return (
    <>
      <div className={styles.textInputBgCircle}>
        <img src={imgBgRightYellowCircle} />
      </div>
      <div className={styles.textInput}>
        <div className="width-restrainer">
          <div className={styles.textInputMain}>
            <div id="main-input-title">
              <h1>
                <span className="strong-purple">Text(</span>
                <span className="ed-strong">ed</span>
                <span className="strong-purple">
                  ) is fast and simple to use!
                </span>
              </h1>
            </div>
            <div id="main-input-selector-1" className="main-input-selector-cl">
              <div className="input-steps">
                <div className="input-steps-round">
                  <h3>1</h3>
                </div>
                <h3>Select the option you want to check:</h3>
              </div>
              <div id="warning-option" className="warning">
                <i className="fa-solid fa-triangle-exclamation"></i> Please
                select one of the options below!
              </div>
              <div id="main-input-selector-options" value="">
                <div
                  id="main-input-selector-options-readability"
                  className="input-selector border-right border-radius-left"
                  // onClick="selectMode('readability')"
                >
                  <strong>READABILITY</strong>
                  <span className="subtitle">of one text</span>
                </div>
                <div
                  id="main-input-selector-options-similarity"
                  className="input-selector border-radius-right"
                  // onClick="selectMode('similarity')"
                >
                  <strong>READABILITY & SIMILARITY</strong>
                  <span className="subtitle">between two texts</span>
                </div>
              </div>
            </div>
            <div id="main-input-selector-2" className="main-input-selector-cl">
              <div className="input-steps">
                <div className="input-steps-round">
                  <h3>2</h3>
                </div>
                <h3>Type or copy-paste your text:</h3>
              </div>
              <div id="warning-identical-texts" className="warning mb">
                <i className="fa-solid fa-person-falling-burst"></i> Oh...
                Identical texts! Please input different texts.
              </div>
              <form
                action="/result"
                method="post"
                // onSubmit="return checkSubmitFunction()"
              />
              <div id="main-input-text">
                <div id="main-input-textbox-1">
                  <div id="warning-textbox-1" className="warning mb">
                    <i className="fa-solid fa-triangle-exclamation"></i> Please,
                    input your text!
                  </div>
                  <textarea
                    id="text-input-form-01"
                    className="form-control text-input"
                    name="text_input"
                    placeholder="Type in or paste your text."
                  ></textarea>
                </div>
                <div id="main-input-textbox-2">
                  <div id="warning-textbox-2" className="warning mb">
                    <i className="fa-solid fa-triangle-exclamation"></i> Please,
                    input your second text!
                  </div>
                  <textarea
                    id="text-input-form-02"
                    className="form-control text-input"
                    name="text_input"
                    placeholder="Type in or paste your 2nd text."
                  ></textarea>
                </div>
              </div>
            </div>
            <div id="main-input-selector-3" className="main-input-selector-cl">
              <div className="input-steps">
                <div className="input-steps-round">
                  <h3>3</h3>
                </div>
                <h3>
                  That&apos;s it... Let&apos;s get Text(
                  <span className="ed-strong">ed</span>
                  ).
                </h3>
              </div>
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox"
                name="inlineCheckbox"
                value=""
              />
              <button className="btn-yellow" id="submit" type="submit">
                {' '}
                GO <i className="fa-solid fa-play"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextInput;
