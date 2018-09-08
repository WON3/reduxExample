import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import './App.css';

import Quick from './quickComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.props.myFirstReduxState}
          <br/>
          {this.props.mySecondReduxState}
          <br/>
          {this.props.myThirdReduxState}
        </p>
        <Quick/>
      </div>
    );
  }
}

export default connect((state) => {return state})(App);
