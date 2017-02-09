// @flow
import React, { Component } from 'react';
import { getText } from './AppService';
import Header from './header/Header';

class App extends Component {

  state = {
    text: String
  }

  constructor() {
    super();
    this.state = {
      text: ''
    };
  }

  componentDidMount() {
    getText().then(response => {
      this.setState({
        text: response.text
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Header text={this.state.text}/>
      </div>
    );
  }
}

export default App;
