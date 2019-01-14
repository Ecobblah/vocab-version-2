import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Vocab from './components/Vocab';
import WordOfDay from './components/WordOfDay';
import About from './components/About'


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter basename='/vocab_v2'>
          <div>
            <Navbar />
            <Route exact path="/" component={WordOfDay} />
            <Route path="/Vocab" component={Vocab} />
            <Route path="/About" component={About} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
