import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Link } from 'react-router-dom';
import qul from '../assets/Logo_QUL_long.png';

class Api extends React.Component {
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
          </nav>
          <div className="container">
            <div className="columns">
              <div className="column">
                <h1
                  className="has-text-weight-bold"
                  style={{ textAlign: 'center', marginTop: '5vh' }}
                >
                  {' '}
                  About the API
                </h1>

                <p
                  style={{
                    marginTop: '5vh',
                    textAlign: 'justify',
                    marginBottom: 20,
                    marginLeft: 20,
                    marginRight: 20
                  }}
                >
                  The API operates on a seven-level readability corpus, which
                  was developed together with people who have been learning the
                  German language on the A and B level, additionally to their
                  native language. The API while scanning the written text a
                  user inputs, calculates the „Mean Opinion Score“ in short MOS,
                  which directly shows the user in the range of 1-7, the
                  readability of the scanned text. The 3 biggest features of the
                  German language, with focus on text readability are the
                  following: traditional, lexical and morphological features,
                  the latter has the biggest impact for second language
                  learners, because of its complexity. Traditional features, set
                  the base line for text readability classification, and builds
                  upon the following 6 features: average length of sentence
                  average number of words per sentence sentence length number of
                  syllables per sentence the “Fleisch-Kincaid score” average
                  word length lexical features are based on the vocabulary
                  properties and most of them are used to assess readability for
                  second language learners, some of them are: number of
                  adjectives number of pronouns lexical diversity ratio of total
                  number of verbs to adverbs Morphological features are
                  important, because they have a huge impact on text readability
                  for second language learners, and a combination of “German
                  finite state morphology (SMOR)” and “conditional random fields
                  (clevertagger)” are used in this API. Some features are:
                  pronominal adverbs preposition used to introduce infinite
                  clause adjective used as noun interrogative adverbs Mainly 20
                  features are being used to calculate the Mean Opinion Score
                  for text readability and they are tested against each other to
                  see how accurate they are. Text readability is calculated by
                  using linear regression, support vector regression, polynomial
                  regression and random forest regression. Additionally, the API
                  is using the “Root Mean Square Error (RMSE)”, to measure the
                  deviation of predicted values from actual values, while
                  predicting errors which come by combining traditional, lexical
                  and morphological features to measure the performance of the
                  algorithm to rate the readability.
                </p>
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

export default Api;
