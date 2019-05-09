import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Home.css';
import graphic from '../assets/education.svg';

function Home() {
  return (
    <section className="hero  is-fullheight">
      <div className="hero-head ">
        <nav
          className="navbar "
          role="navigation"
          aria-label="dropdown navigation"
        >
          <div className="navbar-item is-hoverable">
            <h1 className="has-text-weight-bold">Text-Readability</h1>
          </div>
        </nav>
      </div>
      <div className="hero-body test">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h2 className="has-text-weight-bold is-size-1-desktop">
                How readable is your german?
              </h2>
              <h3>
                designed to indicate how difficult a passage in German is to
                understand.
              </h3>
            </div>
            <div className="column">
              <img src={graphic} alt="illustration" />
            </div>
          </div>
          <div className="button is-primary is-medium">
            <Link className="has-text-white" to="/app/">
              Try it now!
            </Link>
          </div>
        </div>
      </div>
      <div className="hero-footer">
        <p>Copyrights</p>
      </div>
    </section>
  );
}

export default Home;
