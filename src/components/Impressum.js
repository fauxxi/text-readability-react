import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Link } from 'react-router-dom';
import qul from '../assets/Logo_QUL_long.png';

class Impressum extends React.Component {
  render() {
    return (
      <section className="hero is-light is-fullheight">
        <div className="hero-head ">
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
        <div className="hero-body">
          <div className="container">
            <div className="columns" style={{ minHeight: '50vh' }}>
              <div className="column">
                <h1
                  className="has-text-weight-bold is-size-3-desktop"
                  style={{ marginBottom: 40 }}
                >
                  Impressum
                </h1>
                <p className="has-text-weight-bold">
                  Quality and Usability Lab
                </p>
                <p>Innovation Laboratories</p>
                <p>Ernst Reuter Platz 7, 10587 Berlin</p>
                <br />
                <p>
                  <b>Project Manager:</b>
                </p>
                <p>Dr.-Ing. Babak Naderi</p>
                <p>
                  <span>&#9993;</span> babak.naderi@tu-berlin.de
                </p>
              </div>
              <div className="column">
                <iframe
                  title="google-maps"
                  style={{ height: '100%', width: '100%' }}
                  src="https://maps.google.com/maps?q=telekom%20berlin%20ernst%20reuter&t=&z=15&ie=UTF8&iwloc=&output=embed"
                />
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
}

export default Impressum;
