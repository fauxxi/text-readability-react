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
  const [result, setResult] = useState('Waiting for text input...');

  let url = `http://tc.qu.tu-berlin.de/api/v1/readability-models/rfk1/predict`;
  //url += encodeURI(inputText);

  let data = {
    text: inputText,
    ref_id: 'Testsss',
    language: 'DE',
    target_group: 'B1'
  };

  const handleChange = e => {
    setText(e.target.value);
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
    }).then(response => {
      console.log('Response: ', response);
      setResult(response.overall_score);
      console.log('Result:', result);
    });
  };

  console.log(data);

  const ratingBarStyle = {
    padding: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    width: `${(result === 'Waiting for text input...'
      ? 0
      : parseFloat(result) / 7) * 100}%`,
    height: '100%',
    backgroundColor: 'hsl(171, 100%, 41%)',
    transition: 'all .5s ease'
  };

  const barStyle = {
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
              {/* <Editor
                className="title"
                editorState={editorTitleState}
                onChange={editorTitleState => setEditorTitle(editorTitleState)}
                placeholder={'Type your title'}
                blockStyleFn={myBlockStyleFn}
              /> */}

              <TextareaAutosize
                autoFocus={true}
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
            </div>
            <div className="column">
              <h1 className="has-text-weight-bold">Bewertung: </h1>
              {/* {result === 'Waiting for text input...' ? (
                <Lottie
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: require('../assets/loader1.json'),
                    rendererSettings: {
                      preserveAspectRatio: 'xMidYMid slice'
                    }
                  }}
                  height={30}
                  width={'100%'}
                />
              ) : (
                <p>{result}</p>
              )} */}
              <p>{result}</p>
              <div className="bar" style={barStyle}>
                <div
                  className="rating animated slideInLeft"
                  style={ratingBarStyle}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-footer">
        <p>
          <Link to="/impressum/">Impressum</Link> | Copyrights © 2019
        </p>
      </div>
    </section>
  );
}

export default Main;
