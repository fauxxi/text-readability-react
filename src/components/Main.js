import React, { useState } from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Link } from 'react-router-dom';
// eslint-disable-next-line
import { Editor, EditorState, Modifier } from 'draft-js';
import Textarea from 'react-expanding-textarea';

function Main() {
  const [inputText, setText] = useState('');
  const [result, setResult] = useState('Waiting for text input');

  const handleChange = e => {
    setText(e.target.value);
    fetch(url, {
      method: 'POST',
      headers: {
        'X-RapidAPI-Host': 'ipeirotis-readability-metrics.p.rapidapi.com',
        'X-RapidAPI-Key': '8a4af3d3b7msh5fd4e3a585e5a0dp168404jsn02c9a095b4ef',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(res => res.json())
      .then(response => {
        console.log('Response: ', response);
        setResult(calculateResult(response.FLESCH_READING));
        console.log('Result:', result);
      });
  };

  const calculateResult = val => {
    var output = '';
    switch (true) {
      case val < 30 && val > 0:
        output =
          'Level: College graduate | Very hard to read. Best understood by university graduates.';
        break;
      case val >= 30 && val < 50:
        output = 'Level: College | Difficult to read.';
        break;
      case val >= 50 && val < 60:
        output = 'Level: 10th & 12th grade | Fairly difficult to read.';
        break;
      case val >= 60 && val < 70:
        output = 'Level: 8th & 9th grade | Plain English.';
        break;
      case val >= 70 && val < 80:
        output = 'Level: 7th grade | Fairly easy to read.';
        break;
      case val >= 80 && val < 90:
        output = 'Level: 6th grade | Easy to read.';
        break;
      case val >= 90 && val <= 100:
        output = 'Level: 5th grade | Very easy to read.';
        break;
      case val > 100:
        output = 'Text is too easy to read.';
        break;
      default:
        output = 'Text is unreadable.';
    }
    return output;
  };

  // let url = `https://ipeirotis-readability-metrics.p.rapidapi.com/getReadabilityMetrics?text=`;
  // url += encodeURI(inputText);

  let url = `https://ipeirotis-readability-metrics.p.rapidapi.com/getReadabilityMetrics?text=`;
  url += encodeURI(inputText);

  return (
    <section className="hero is-light is-fullheight">
      <div className="hero-bead">
        <nav className="navbar" role="navigation" aria-label="navigation">
          <div className="navbar-item is-hoverable">
            <h1 className="has-text-weight-bold ">
              <Link className="has-text-primary" to="/">
                Text-Readability
              </Link>
            </h1>
          </div>
        </nav>
      </div>
      <div className="hero-body test">
        <div className="container">
          <div className="columns">
            <div className="column has-background-white">
              {/* <Editor
                className="title"
                editorState={editorTitleState}
                onChange={editorTitleState => setEditorTitle(editorTitleState)}
                placeholder={'Type your title'}
                blockStyleFn={myBlockStyleFn}
              /> */}

              <Textarea
                autoFocus={true}
                className=""
                value={inputText}
                onChange={handleChange}
                style={{
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  fontSize: 20,
                  resize: 'none'
                }}
                placeholder={'Type your text here.'}
              />
            </div>
            <div className="column">
              <h1 className="has-text-weight-bold">Bewertung: </h1>
              <p>{result}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-footer">
        <p>Copyrights © 2019</p>
      </div>
    </section>
  );
}

export default Main;
