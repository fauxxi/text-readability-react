import React, { useState } from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Link } from 'react-router-dom';
// eslint-disable-next-line
import { Editor, EditorState, Modifier } from 'draft-js';
//import Textarea from 'react-expanding-textarea';
import TextareaAutosize from 'react-autosize-textarea';

function Main() {
  const [inputText, setText] = useState('');
  const [result, setResult] = useState('Waiting for text input');

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

  // const calculateResult = val => {
  //   var output = '';
  //   switch (true) {
  //     case val < 30 && val > 0:
  //       output =
  //         'Level: College graduate | Very hard to read. Best understood by university graduates.';
  //       break;
  //     case val >= 30 && val < 50:
  //       output = 'Level: College | Difficult to read.';
  //       break;
  //     case val >= 50 && val < 60:
  //       output = 'Level: 10th & 12th grade | Fairly difficult to read.';
  //       break;
  //     case val >= 60 && val < 70:
  //       output = 'Level: 8th & 9th grade | Plain English.';
  //       break;
  //     case val >= 70 && val < 80:
  //       output = 'Level: 7th grade | Fairly easy to read.';
  //       break;
  //     case val >= 80 && val < 90:
  //       output = 'Level: 6th grade | Easy to read.';
  //       break;
  //     case val >= 90 && val <= 100:
  //       output = 'Level: 5th grade | Very easy to read.';
  //       break;
  //     case val > 100:
  //       output = 'Text is too easy to read.';
  //       break;
  //     default:
  //       output = 'Text is unreadable.';
  //   }
  //   return output;
  // };

  // let url = `https://ipeirotis-readability-metrics.p.rapidapi.com/getReadabilityMetrics?text=`;
  // url += encodeURI(inputText);

  console.log(data);

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
              <p>{result}</p>
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
