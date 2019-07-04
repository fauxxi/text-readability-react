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
            <div className="columns">
              <div className="column">
                <div className="field">
                  <label className="label">First Name</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="firstname"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Last Name</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="lastname"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Phone Number:</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="tel"
                      placeholder="+49..."
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Email:</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="email"
                      placeholder="example@example.com"
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Subject</label>
                  <div className="control">
                    <div className="select">
                      <select>
                        <option>Please Choose</option>
                        <option value="complaint">Complaint</option>
                        <option value="general">General Question</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="field">
                  <label className="label">Matter</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      id="matter"
                      placeholder="Please fill out"
                    />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input
                      className="button is-primary"
                      type="submit"
                      value="Submit"
                    />
                  </div>
                </div>
              </div>
              <div className="column">
                <iframe
                  title="google-maps"
                  style={{ height: '100%', width: '100%' }}
                  src="https://maps.google.com/maps?q=telekom%20berlin%20ernst%20reuter&t=&z=15&ie=UTF8&iwloc=&output=embed"
                />
                <p className="has-text-weight-bold">Deutscher Telekom AG</p>
                <p>Innovation Laboratories</p>
                <p>Ernst Reuter Platz 7, 10587 Berlin</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Impressum;
