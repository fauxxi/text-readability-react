import React, { useState, useEffect } from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Link } from 'react-router-dom';
import TextareaAutosize from 'react-autosize-textarea';
import qul from '../assets/Logo_QUL_long.png';

function Main() {
  const [inputText, setText] = useState('');
  const [result, setResult] = useState('Waiting for user input...'); // "Waiting for user input..."
  const [highlightedText, setHighlightedText] = useState([]);

  useEffect(() => {
    document.getElementById('button-check').classList.remove('is-loading');
  });

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
    document.getElementById('button-check').classList.add('is-loading');
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
        //console.log('Response: ', response);
        setResult(response.overall_score);
        setHighlightedText(response.detailed_analysis);
        //console.log('Result:', result);
      })
      .catch(function(error) {
        //Handle error
        console.log(error);
      });
  };

  const resultDesc = val => {
    if (val >= 0 && val <= 1) {
      return '- This passage is very easy to understand, and has no complexity whatsoever regarding readability.';
    } else if (val > 1 && val <= 2) {
      return '- This passage is still easy to understand, but it has a little more complexity regarding it’s content.';
    } else if (val > 2 && val <= 3) {
      return '- This passage might be harder, but still easy enough to understand, it has more complex elements.';
    } else if (val > 3 && val <= 4) {
      return '- The content of this passage might be difficult to understand, it’s fairly complex in terms of readability.';
    } else if (val > 4 && val <= 5) {
      return '- This passage is fairly hard to understand and contains difficult phrases, which might slow down readability.';
    } else if (val > 5 && val <= 6) {
      return '- This passage is hard to understand and has a high degree of difficulty in it, you might want to try to break it down to improve readability.';
    } else if (val > 6 && val <= 7) {
      return '- This passage is very hard to understand and has a high difficulty in it’s content, advising to rephrase it to ease up the readability.';
    } else if (val === 'Waiting for user input...') {
      return '';
    } else {
      return '- Something is wrong. Try input text again.';
    }
  };

  const span = {
    margin: 1,
    position: 'relative',
    top: 0,
    left: 0,
    color: '#000',
    zIndex: 1000
  };

  const spanx = {
    marginLeft: -7,
    position: 'absolute',
    top: -30,
    left: `${(result === 'Waiting for text input...'
      ? 0
      : (parseFloat(result) + -1) / 6) * 100}%`,
    color: '#000',
    fontSize: '2em',
    zIndex: 1000
  };

  const barStyle = {
    marginLeft: `${-0 * 100}%`,
    marginTop: 20,
    width: '100%',
    height: 30,
    backgroundColor: '#fff',
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
                id="button-check"
                className="button is-primary has-text-weight-bold"
                onClick={check}
              >
                Check
              </button>
            </div>
            <div className="column">
              <h1 className="has-text-weight-bold">Rating: </h1>

              <p className="">{`${result} ${resultDesc(result)}`}</p>
              <div className="bar" style={barStyle}>
                <span className="has-text-weight-bold" style={spanx}>
                  x
                </span>
                <div style={{ height: 30 }}>
                  <table
                    style={{
                      width: '100%',
                      backgroundColor: 'yellow'
                    }}
                  >
                    <thead
                      style={{
                        width: `${(1 / 6) * 100}%`,
                        height: 30,
                        backgroundColor: '#66bc7b'
                      }}
                    >
                      <tr>
                        <th
                          style={{
                            width: `${(1 / 6) * 100}%`,
                            paddingLeft: 5,
                            height: 30,
                            backgroundColor: '#66bc7b'
                          }}
                        >
                          1
                        </th>
                        <th
                          style={{
                            width: `${(1 / 6) * 100}%`,
                            paddingLeft: 5,
                            backgroundColor: '#95ce7d'
                          }}
                        >
                          2
                        </th>
                        <th
                          style={{
                            width: `${(1 / 6) * 100}%`,
                            paddingLeft: 5,
                            backgroundColor: '#cdde78'
                          }}
                        >
                          3
                        </th>
                        <th
                          style={{
                            width: `${(1 / 6) * 100}%`,
                            paddingLeft: 5,
                            backgroundColor: '#ffe985'
                          }}
                        >
                          4
                        </th>
                        <th
                          style={{
                            width: `${(1 / 6) * 100}%`,
                            paddingLeft: 5,
                            backgroundColor: '#fcbe81'
                          }}
                        >
                          5
                        </th>
                        <th
                          style={{
                            width: `${(1 / 6) * 100}%`,
                            paddingLeft: 5,
                            backgroundColor: '#fc9572'
                          }}
                        >
                          6
                        </th>
                      </tr>
                    </thead>
                  </table>
                </div>

                <div stle={{ position: 'absolute' }}>
                  <p style={{ position: 'absolute', top: 40 }}>Sehr Einfach</p>
                  <p style={{ position: 'absolute', top: 40, right: 0 }}>
                    Sehr Komplex
                  </p>
                </div>
              </div>
              {/* {highlighted texts} */
              highlightedText.map((val, index) => (
                <p key={index}>val.chunk_text</p>
              ))}
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
