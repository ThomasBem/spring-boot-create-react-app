// @flow
import React from 'react';
import getText from './AppService';
import Header from './header/Header';

type State = {
  text: string
};

class App extends React.Component<{}, State> {
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
        <Header text={this.state.text} />
      </div>
    );
  }
}

export default App;
