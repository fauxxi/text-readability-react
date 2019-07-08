import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Home.css';
import graphic from '../assets/education.svg';
import qul from '../assets/Logo_QUL_long.png';

function Home() {
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
              <h1 className="has-text-weight-bold">Text-Readability</h1>
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
            <div className="column">
              <h2 className="has-text-weight-bold is-size-1-desktop">
                How complex is your german?
              </h2>
              <h3>
                designed to indicate how difficult a passage in German is to
                understand.
              </h3>
              <br />
              <div className="button is-primary is-medium">
                <Link className="has-text-white" to="/app/">
                  Try it now!
                </Link>
              </div>
            </div>
            <div className="column">
              <img src={graphic} alt="illustration" />
            </div>
          </div>
          <br />
          <br />
          <div>
            <h1 className="has-text-weight-bold is-size-1-desktop has-text-centered">
              About This Project
            </h1>
            <p className="has-text-centered">
              This Website is created in the context of the course “Projekt
              Medienerstellung” (Project on developing media) at Technische
              Universität Berlin in 2019. It uses an API (application
              programming interface) made by{' '}
              <a
                className="has-text-primary"
                href="https://laboratories.telekom.com/de/"
                target="_blank"
                rel="noopener noreferrer"
              >
                T-Labs
              </a>
              .
            </p>
            <p className="has-text-centered">
              The text input will be categorized automatically. As it is very
              easy to use, you can focus on improving the readability of your
              text.
            </p>
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

export default Home;
