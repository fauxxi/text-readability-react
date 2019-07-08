import React, { useState } from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Link } from 'react-router-dom';
// eslint-disable-next-line
import { Editor, EditorState, Modifier } from 'draft-js';
//import Textarea from 'react-expanding-textarea';
import TextareaAutosize from 'react-autosize-textarea';
import qul from '../assets/Logo_QUL_long.png';
import './Main.css';
// eslint-disable-next-line
import * as animationData from '../assets/loader2.json';
// eslint-disable-next-line
import Lottie from 'react-lottie';

function Main() {
  const [inputText, setText] = useState('');
  const [result, setResult] = useState('Waiting for user input...');

  let url = `http://tc.qu.tu-berlin.de/api/v1/readability-models/rfk1/predict`;
  //url += encodeURI(inputText);

  // eslint-disable-next-line
  let data = {
    text: inputText,
    ref_id: 'Testsss',
    language: 'DE',
    target_group: 'B1'
  };

  const handleChange = e => {
    setText(e.target.value);
  };

  const check = () => {
    fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      // headers: {
      //   'Access-Control-Allow-Origin': '*'
      // }
      body: JSON.stringify({
        text: inputText,
        ref_id: 'Testsss',
        language: 'DE',
        target_group: 'B1'
      })
    })
      .then(response => response.json())
      .then(response => {
        console.log('Response: ', response);
        setResult(response.overall_score);
        console.log('Result:', result);
      });
  };

  const resultDesc = val => {
    if (val >= 0 && val <= 1) {
      return 'This passage is very easy to understand, and has no complexity whatsoever regarding readability.';
    } else if (val > 1 && val <= 2) {
      return 'This passage is still easy to understand, but it has a little more complexity regarding it’s content.';
    } else if (val > 2 && val <= 3) {
      return 'This passage might be harder, but still easy enough to understand, it has more complex elements.';
    } else if (val > 3 && val <= 4) {
      return 'The content of this passage might be difficult to understand, it’s fairly complex in terms of readability.';
    } else if (val > 4 && val <= 5) {
      return 'This passage is fairly hard to understand and contains difficult phrases, which might slow down readability.';
    } else if (val > 5 && val <= 6) {
      return 'This passage is hard to understand and has a high degree of difficulty in it, you might want to try to break it down to improve readability.';
    } else if (val > 6 && val <= 7) {
      return 'This passage is very hard to understand and has a high difficulty in it’s content, advising to rephrase it to ease up the readability.';
    } else return 'Something is wrong. Sorry.';
  };

  //console.log(data);

  const ratingBarStyle = {
    padding: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    // width: `${(result === 'Waiting for text input...'
    //   ? 0
    //   : parseFloat(result) / 7) * 100}%`,
    width: `${(7 / 7) * 100}%`,
    height: '100%',
    backgroundColor: '#fa6868',
    transition: 'all .5s ease'
  };

  const ratingBarStyle2 = {
    padding: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    // width: `${(result === 'Waiting for text input...'
    //   ? 0
    //   : parseFloat(result) / 7) * 100}%`,
    width: `${(6 / 7) * 100}%`,
    height: '100%',
    backgroundColor: '#fc9572',
    transition: 'all .5s ease'
  };

  const ratingBarStyle3 = {
    padding: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    // width: `${(result === 'Waiting for text input...'
    //   ? 0
    //   : parseFloat(result) / 7) * 100}%`,
    width: `${(5 / 7) * 100}%`,
    height: '100%',
    backgroundColor: '#fcbe81',
    transition: 'all .5s ease'
  };

  const ratingBarStyle4 = {
    padding: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    // width: `${(result === 'Waiting for text input...'
    //   ? 0
    //   : parseFloat(result) / 7) * 100}%`,
    width: `${(4 / 7) * 100}%`,
    height: '100%',
    backgroundColor: '#ffe985',
    transition: 'all .5s ease'
  };

  const ratingBarStyle5 = {
    padding: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    // width: `${(result === 'Waiting for text input...'
    //   ? 0
    //   : parseFloat(result) / 7) * 100}%`,
    width: `${(3 / 7) * 100}%`,
    height: '100%',
    backgroundColor: '#cdde78',
    transition: 'all .5s ease'
  };

  const ratingBarStyle6 = {
    padding: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    // width: `${(result === 'Waiting for text input...'
    //   ? 0
    //   : parseFloat(result) / 7) * 100}%`,
    width: `${(2 / 7) * 100}%`,
    height: '100%',
    backgroundColor: '#95ce7d',
    transition: 'all .5s ease'
  };

  const ratingBarStyle7 = {
    padding: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    // width: `${(result === 'Waiting for text input...'
    //   ? 0
    //   : parseFloat(result) / 7) * 100}%`,
    width: `${(1 / 7) * 100}%`,
    height: '100%',
    backgroundColor: '#66bc7b',
    transition: 'all .5s ease'
  };

  const span = {
    margin: 4,
    position: 'absolute',
    top: 0,
    right: 0,
    color: '#000'
  };

  const spanx = {
    marginLeft: -7,
    position: 'absolute',
    top: -30,
    left: `${(result === 'Waiting for text input...'
      ? 0
      : parseFloat(result) / 7) * 100}%`,
    color: '#000',
    fontSize: '2em',
    zIndex: 2
  };

  const barStyle = {
    marginTop: 10,
    width: '100%',
    height: '30',
    backgroundColor: '#333',
    position: 'relative'
  };

  return (
    <section className="hero is-light is-fullheight">
      <div className="hero-bead">
        <nav
          className="navbar"
          role="navigation"
          aria-label="dropdown navigation"
        >
          <div className="navbar-start">
            <div className="navbar-item is-hoverable">
              <h1 className="has-text-weight-bold">
                <Link className="has-text-primary" to="/">
                  Text-Readability
                </Link>
              </h1>
            </div>
          </div>
          <div className="navbar-end">
            <img
              src={qul}
              style={{ width: '20%', height: '100%' }}
              alt="QUL logo"
            />
          </div>
          {/* <div class="navbar-item field">
            <label for="switchRoundedDefault">Dark mode: </label>
            <input
              id="switchRoundedDefault"
              type="checkbox"
              name="switchRoundedDefault"
              class="switch is-rounded"
            />
          </div> */}
        </nav>
      </div>
      <div className="hero-body test">
        <div className="container">
          <div className="columns">
            <div className="column ">
              <TextareaAutosize
                autoFocus={true}
                rows={10}
                className=""
                value={inputText}
                onChange={handleChange}
                style={{
                  background: 'white',
                  border: 'none',
                  outline: 'none',
                  fontSize: 20,
                  resize: 'none',
                  width: '100%',
                  padding: '10px'
                }}
                placeholder={'Type your text here.'}
              />

              <button
                className="button is-primary has-text-weight-bold"
                onClick={check}
              >
                Check
              </button>
            </div>
            <div className="column">
              <h1 className="has-text-weight-bold">Rating: </h1>

              <p className="">{`${result} - ${resultDesc(result)}`}</p>
              <div className="bar" style={barStyle}>
                <span className="has-text-weight-bold" style={spanx}>
                  x
                </span>
                <div
                  className="rating animated slideInLeft"
                  style={ratingBarStyle}
                >
                  <span className="has-text-weight-bold" style={span}>
                    7
                  </span>
                </div>
                <div
                  className="rating animated slideInLeft"
                  style={ratingBarStyle2}
                >
                  <span className="has-text-weight-bold" style={span}>
                    6
                  </span>
                </div>
                <div
                  className="rating animated slideInLeft"
                  style={ratingBarStyle3}
                >
                  <span className="has-text-weight-bold" style={span}>
                    5
                  </span>
                </div>
                <div
                  className="rating animated slideInLeft"
                  style={ratingBarStyle4}
                >
                  <span className="has-text-weight-bold" style={span}>
                    4
                  </span>
                </div>
                <div
                  className="rating animated slideInLeft"
                  style={ratingBarStyle5}
                >
                  <span className="has-text-weight-bold" style={span}>
                    3
                  </span>
                </div>
                <div
                  className="rating animated slideInLeft"
                  style={ratingBarStyle6}
                >
                  <span className="has-text-weight-bold" style={span}>
                    2
                  </span>
                </div>
                <div
                  className="rating animated slideInLeft"
                  style={ratingBarStyle7}
                >
                  <span className="has-text-weight-bold" style={span}>
                    1
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-footer">
        <p>
          <Link to="/impressum/">Impressum</Link> |{' '}
          <Link to="/api/">About the API</Link> | Copyrights © 2019
        </p>
      </div>
    </section>
  );
}

export default Main;
