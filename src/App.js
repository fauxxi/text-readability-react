import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'bulma/css/bulma.css';
import './App.css';
import Home from './components/Home';
import Main from './components/Main';
import Impressum from './components/Impressum';
import Api from './components/Api';
// import Test from './components/Test';

// function About() {
//   return <h2>About</h2>;
// }

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/impressum/" component={Impressum} />
        <Route path="/api/" component={Api} />
        <Route path="/app/" component={Main} />
      </div>
    </Router>
  );
}

export default App;
